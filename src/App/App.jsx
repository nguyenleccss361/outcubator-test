import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RouteList } from '../config/routes/RouterList'
import './App.scss'

export function App() {
	const routerList = RouteList()
	const router = createBrowserRouter([...routerList])
	return <RouterProvider router={router} />
}
