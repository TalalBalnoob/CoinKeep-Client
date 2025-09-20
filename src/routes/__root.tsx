import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import SideBar from '../components/SideBar'

const RootLayout = () => (
	<>
		<SideBar />
		<Outlet />
		<TanStackRouterDevtools />
	</>
)

export const Route = createRootRoute({ component: RootLayout })
