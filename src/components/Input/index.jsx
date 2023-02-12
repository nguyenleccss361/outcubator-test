import './index.scss'
import optionalIcon from '../../assets/images/optional.svg'
import { userData } from '../../config/data/fakeData'

function Input({
	label,
	amount,
	currency,
	currencyTarget,
	setCurrencyParams,
	target,
	targetAmount,
	optional,
	...props
}) {
	const selectedBalance = userData?.find(
		item => item.currency === currency,
	)?.balance
	function handleChangeAmount(e) {
		if (selectedBalance < parseInt(e.target.value)) {
			setCurrencyParams({
				from: currency,
				to: currencyTarget,
				amount: selectedBalance,
			})
		} else {
			setCurrencyParams({
				from: currency,
				to: currencyTarget,
				amount: e.target.value,
			})
		}
	}
	console.log('amount', amount)

	return (
		<>
			<div className={`input ${optional && 'optional'}`}>
				<input
					type={`${optional || target ? 'text' : 'number'}`}
					id="amount"
					value={!target ? amount : targetAmount ?? '...'}
					onChange={handleChangeAmount}
					required
					{...props}
				/>
				<label htmlFor="amount">{label}</label>
			</div>
			{optional ? (
				<div className="input-optional">
					<img src={optionalIcon} alt="Optional title" />
					<p>Optional.</p>
				</div>
			) : null}
		</>
	)
}

export default Input
