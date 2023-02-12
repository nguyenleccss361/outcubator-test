import { userData } from '../../config/data/fakeData'
import './index.scss'
import usFlag from '../../assets/images/US.svg'
import caFlag from '../../assets/images/CA.svg'
import euFlag from '../../assets/images/EU.svg'
import mxFlag from '../../assets/images/MX.svg'
import plFlag from '../../assets/images/PL.svg'
import ukFlag from '../../assets/images/UK.svg'
import { useState } from 'react'
import { DropDownSVG } from '../SVG/DropDownSVG'

const flag = {
	usd: usFlag,
	cad: caFlag,
	eur: euFlag,
	mxn: mxFlag,
	pln: plFlag,
	gbp: ukFlag,
}

function CurrDropDown({ target, currency, currencyTarget, setCurrency }) {
	const [isOpen, setOpen] = useState(false)
	const [selectedItem, setSelectedItem] = useState(
		!target ? userData[0] : userData[1],
	)

	const toggleDropdown = () => setOpen(prev => !prev)
	const handleItemClick = id => {
		const selectedData = userData?.find(item => item.id === parseInt(id))
		setSelectedItem(selectedData)
		if (target) {
			setCurrency({
				from: currency,
				to: selectedData.currency,
			})
		} else {
			setCurrency({ from: selectedData.currency, to: currencyTarget })
		}
		setOpen(false)
	}

	return (
		<div className="dropdown">
			<div
				className={`dropdown-header ${target && 'target'}`}
				onClick={toggleDropdown}
			>
				<div className="dropdown-header-flag">
					<img
						src={!target ? flag[currency] : flag[currencyTarget]}
						alt={!target ? currency : currencyTarget}
					/>
					<p>
						{!target ? currency.toUpperCase() : currencyTarget.toUpperCase()}
					</p>
				</div>
				{!target ? (
					<div className="dropdown-header-balance">
						{selectedItem?.balance}
						<p>Available</p>
					</div>
				) : null}
				<DropDownSVG
					width="14"
					height="8"
					viewBox="0 0 14 8"
					className={`icon ${isOpen && 'open'} ${target && 'target'}`}
				/>
			</div>
			<div className={`dropdown-body ${isOpen && 'open'}`}>
				{userData
					?.filter(item => item?.id !== selectedItem?.id)
					?.map(item => (
						<div
							className="dropdown-item"
							onClick={e => handleItemClick(e.target.id)}
							id={item?.id}
							key={item?.id}
						>
							<div className="dropdown-header-flag">
								<img src={flag[item?.currency]} alt={item?.currency} />
								<p>{item?.currency.toUpperCase()}</p>
							</div>
							{!target ? <p>{item?.balance}</p> : null}
						</div>
					))}
			</div>
		</div>
	)
}

export default CurrDropDown
