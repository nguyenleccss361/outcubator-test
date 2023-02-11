import { useState } from 'react'
import Conversion from '../components/Conversion'
import CurrDropDown from '../components/CurrDropDown'
import Input from '../components/Input'

function HomePage() {
	const [amount, setAmount] = useState(1)
	const [targetAmount, setTargetAmount] = useState(null)

	const [currency, setCurrency] = useState('usd')
	const [currencyTarget, setCurrencyTarget] = useState('eur')

	return (
		<div>
			<div>
				<CurrDropDown
					setCurrency={setCurrency}
					setCurrencyTarget={setCurrencyTarget}
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
				<CurrDropDown target={true} setCurrencyTarget={setCurrencyTarget} />
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
