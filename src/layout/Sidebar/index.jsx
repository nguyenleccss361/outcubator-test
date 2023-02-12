import { ConvertMoneySVG } from '../../components/SVG/ConvertMoneySVG'
import { DepositMoneySVG } from '../../components/SVG/DepositMoneySVG'
import { LiveChatSVG } from '../../components/SVG/LiveChatSVG'
import { ManageCardsSVG } from '../../components/SVG/ManageCardsSVG'
import { MyAccSVG } from '../../components/SVG/MyAccSVG'
import { TransactionsSVG } from '../../components/SVG/TransactionsSVG'
import './index.scss'
import progressBarIcon from '../../assets/images/progressbar.svg'
import { DropDownSVG } from '../../components/SVG/DropDownSVG'
import { MiniAppsSVG } from '../../components/SVG/MiniAppsSVG'
import { useMediaQuery } from '../../utils/hooks'

function Sidebar() {
	const isMobile = useMediaQuery('(max-width: 767px)')

	return (
		<div className="sidebar">
			<div className="sidebar-step">
				<div className="sidebar-step-progress">
					<img src={progressBarIcon} alt="Progress bar" />
					{!isMobile ? (
						<div>
							<p>STEP 02</p>
							<p>Specify Amount</p>
						</div>
					) : null}
				</div>
				<DropDownSVG width="14" height="8" viewBox="0 0 14 8" />
			</div>
			<div className="sidebar-link">
				<div className="sidebar-link-item">
					<MyAccSVG width="18" height="18" viewBox="0 0 18 18" />
					<p>My Accounts</p>
				</div>
				<div className="sidebar-link-item">
					<TransactionsSVG width="18" height="18" viewBox="0 0 18 18" />
					<p>Transactions</p>
				</div>
				<div className="sidebar-link-item">
					<ManageCardsSVG width="18" height="18" viewBox="0 0 18 18" />
					<p>Manage Cards</p>
				</div>
				<div className="sidebar-link-item">
					<DepositMoneySVG width="18" height="18" viewBox="0 0 18 18" />
					<p>Deposit Money</p>
				</div>
				<div className="sidebar-link-item">
					<ConvertMoneySVG width="18" height="18" viewBox="0 0 18 18" />
					<p>Convert Money</p>
				</div>
				<div className="sidebar-link-item">
					<LiveChatSVG width="18" height="18" viewBox="0 0 18 18" />
					<p>Live Chat</p>
				</div>
			</div>
			<div className="sidebar-footer">
				<div className="sidebar-footer-content">
					<MiniAppsSVG width="18" height="18" viewBox="0 0 18 18" />
					<p>Mini Apps</p>
				</div>
				<div className="sidebar-footer-pro">PRO</div>
			</div>
		</div>
	)
}

export default Sidebar
