function Input({ label, amount, setAmount, target, targetAmount, ...props }) {
	function handleChangeAmount(e) {
		setAmount(e.target.value)
	}

	return (
		<div className="input">
			<input
				type="number"
				id="amount"
				value={!target ? amount : targetAmount}
				onChange={handleChangeAmount}
				required
				{...props}
			/>
			<label htmlFor="amount">{label}</label>
		</div>
	)
}

export default Input
