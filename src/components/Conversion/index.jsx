import { useEffect, useState } from 'react'
import { exchangeRatesData } from '../../config/data/fakeData'
import './index.scss'

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
	const [fee, setFee] = useState(1 * feeRate.low)

	const exchangeRate =
		exchangeRatesData[currencyTarget] / exchangeRatesData[currency]
	const recipientAmount = amount * exchangeRate - feeCalculated

	useEffect(() => {
		async function fetchFeeRate() {
			await sleep(1500)
			setFee(feeCalculated)
			setTargetAmount(recipientAmount)
		}
		fetchFeeRate()
	}, [feeCalculated, setTargetAmount, currency, currencyTarget])

	return (
		<div className="conversion">
			<p>{`${fee.toFixed(3)} ${currency?.toUpperCase()} fees`}</p>
			<p>{`${exchangeRate.toFixed(
				6,
			)} ${currencyTarget?.toUpperCase()} exchange rate`}</p>
		</div>
	)
}

export default Conversion
