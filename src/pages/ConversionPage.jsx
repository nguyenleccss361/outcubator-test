import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Conversion from '../components/Conversion'
import CurrDropDown from '../components/CurrDropDown'
import Input from '../components/Input'
import { useDebouncedState } from '../utils/debounce'

function HomePage() {
	const [amount, setAmount] = useState(1)
	const [targetAmount, setTargetAmount] = useDebouncedState(null)

	const [currencyParams, setCurrencyParams] = useSearchParams({
		from: 'usd',
		to: 'eur',
	})
	const currency = currencyParams.get('from')
	const currencyTarget = currencyParams.get('to')

	return (
		<div>
			<div>
				<CurrDropDown
					currency={currency}
					currencyTarget={currencyTarget}
					setCurrency={setCurrencyParams}
				/>
				<Input label="You send" amount={amount} setAmount={setAmount} />
			</div>
			<Conversion
				currency={currency}
				currencyTarget={currencyTarget}
				amount={amount}
				setTargetAmount={setTargetAmount}
			/>
			<div>
				<CurrDropDown
					target={true}
					currency={currency}
					currencyTarget={currencyTarget}
					setCurrency={setCurrencyParams}
				/>
				<Input
					label="Recipient gets"
					target={true}
					targetAmount={targetAmount}
					disabled
				/>
			</div>
			{/* <Input /> */}
		</div>
	)
}

export default HomePage
