export function DropDownSVG({ width, height, viewBox, ...props }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12.6569 1L7 6.65685L1.34314 1"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
