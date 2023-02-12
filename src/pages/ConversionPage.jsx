import { useSearchParams } from 'react-router-dom'
import Conversion from '../components/Conversion'
import CurrDropDown from '../components/CurrDropDown'
import Input from '../components/Input'
import { useDebouncedState } from '../utils/hooks'
import './ConversionPage.scss'

function HomePage() {
	const [targetAmount, setTargetAmount] = useDebouncedState(null)

	const [currencyParams, setCurrencyParams] = useSearchParams({
		from: 'usd',
		to: 'eur',
		amount: 1,
	})
	const currency = currencyParams.get('from')
	const currencyTarget = currencyParams.get('to')
	const amount = currencyParams.get('amount')

	return (
		<>
			<div className="form-container">
				<div className="form">
					<CurrDropDown
						currency={currency}
						currencyTarget={currencyTarget}
						setCurrency={setCurrencyParams}
						amount={amount}
					/>
					<Input
						label="You send"
						amount={amount}
						currency={currency}
						currencyTarget={currencyTarget}
						setCurrencyParams={setCurrencyParams}
					/>
				</div>
				<Conversion
					currency={currency}
					currencyTarget={currencyTarget}
					amount={amount}
					setTargetAmount={setTargetAmount}
				/>
				<div className="form">
					<CurrDropDown
						target
						currency={currency}
						currencyTarget={currencyTarget}
						setCurrency={setCurrencyParams}
						amount={amount}
					/>
					<Input
						label="Recipient gets"
						target
						targetAmount={targetAmount}
						disabled
					/>
				</div>
			</div>
			<Input label="Title" optional />
			<div className="btn">
				<button className="btn-back">Back</button>
				<button className="btn-continue">Continue</button>
			</div>
		</>
	)
}

export default HomePage
