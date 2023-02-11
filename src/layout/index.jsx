import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './index.scss'

function Layout() {
	return (
		<div className="layout-container">
			<div className="sidebar-container">
				<Sidebar />
			</div>
			<div className="layout-outlet">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
