export function TransactionsSVG({ width, height, viewBox, ...props }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.415 14H15.6V11.8H12.415V14ZM10.415 16H15.6C16.705 16 17.6 15.104 17.6 14V9.8H10.415V16ZM2 14H5.185V11.8H2V14ZM0 14C0 15.104 0.896 16 2 16H7.185V9.8H0V14ZM12.415 4.2H15.6V2H12.415V4.2ZM15.6 0H10.415V6.2H17.6V2C17.6 0.896 16.705 0 15.6 0ZM2 4.2H5.185V2H2V4.2ZM0 2V6.2H7.185V0H2C0.896 0 0 0.896 0 2Z"
				fill="currentColor"
			/>
		</svg>
	)
}