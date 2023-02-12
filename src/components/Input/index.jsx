import './index.scss'
import optionalIcon from '../../assets/images/optional.svg'

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
	function handleChangeAmount(e) {
		setCurrencyParams({
			from: currency,
			to: currencyTarget,
			amount: e.target.value,
		})
	}

	return (
		<>
			<div className={`input ${optional && 'optional'}`}>
				<input
					type={`${optional ? 'text' : 'number'}`}
					id="amount"
					value={!target ? amount : targetAmount}
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
