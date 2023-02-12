import { useEffect } from 'react'
import { exchangeRatesData } from '../../config/data/fakeData'
import { useDebouncedState } from '../../utils/hooks'
import './index.scss'
import feeIcon from '../../assets/images/fee.svg'
import exchangeRateIcon from '../../assets/images/exchange-rate.svg'
import Spinner from '../Spinner'

const feeRate = {
	low: 0.005,
	normal: 0.008,
	high: 0.005,
}

// simulate a real-world wait period
const sleep = t => new Promise(resolve => setTimeout(resolve, t))

function Conversion({ currency, currencyTarget, amount, setTargetAmount }) {
	const feeCalculated =
		amount < 10
			? amount * feeRate.low
			: amount >= 10 && amount < 100
				? amount * feeRate.normal
				: 1.5 + amount * feeRate.high
	const [fee, setFee] = useDebouncedState(1 * feeRate.low)

	const exchangeRate =
		exchangeRatesData[currencyTarget] / exchangeRatesData[currency]
	const recipientAmount = amount * exchangeRate - feeCalculated
	const recipientAmountFormatted = new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: currencyTarget.toUpperCase(),
	}).format(recipientAmount.toFixed(2))

	useEffect(() => {
		async function fetchFeeRate() {
			setFee(null)
			setTargetAmount(null)
			await sleep(1500)
			setFee(feeCalculated ?? 0)
			setTargetAmount(recipientAmountFormatted)
		}
		fetchFeeRate()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [feeCalculated, setTargetAmount, currency, currencyTarget])

	return (
		<div className="conversion">
			<div className="conversion-content">
				{fee || fee === 0 ? (
					<p>{`${fee?.toFixed(3)} ${currency?.toUpperCase()} fees`}</p>
				) : (
					<Spinner className="loading" />
				)}
				<img src={feeIcon} alt="Fee" />
				<p>{`${exchangeRate.toFixed(
					6,
				)} ${currencyTarget?.toUpperCase()} exchange rate`}</p>
				<img src={exchangeRateIcon} alt="Exchange rate" />
			</div>
		</div>
	)
}

export default Conversion
