import { useEffect } from 'react'
import { exchangeRatesData } from '../../config/data/fakeData'
import { useDebouncedState } from '../../utils/hooks'
import './index.scss'
import feeIcon from '../../assets/images/fee.svg'
import exchangeRateIcon from '../../assets/images/exchange-rate.svg'

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

	useEffect(() => {
		async function fetchFeeRate() {
			await sleep(1500)
			setFee(feeCalculated)
			setTargetAmount(recipientAmount.toFixed(2))
		}
		fetchFeeRate()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [feeCalculated, setTargetAmount, currency, currencyTarget])

	return (
		<div className="conversion">
			<div className="conversion-content">
				<p>{`${fee.toFixed(3)} ${currency?.toUpperCase()} fees`}</p>
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
