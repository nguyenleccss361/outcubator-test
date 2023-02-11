import Layout from '../../layout'
import ConversionPage from '../../pages/ConversionPage'

export function RouteList() {
	return [
		{
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <ConversionPage />,
					children: [
						{
							path: '/:pair',
							element: <ConversionPage />,
						},
					],
				},
			],
		},
	]
}
