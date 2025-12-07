import Nav from './assets/components/navbar.jsx'
import Login from './assets/components/nav_components/login.jsx'
import Home from './assets/components/nav_components/home.jsx'
import About from './assets/components/nav_components/about.jsx'
import Contact_Us from './assets/components/nav_components/contact_us.jsx'
import Sidebar from './assets/components/sidebar.jsx'
import Calculator from './assets/components/calculator.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Nav />
            <Sidebar />
            <div id='content'>
            <Outlet />
            </div>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/My_React",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "contact_us", element: <Contact_Us /> },
            { path: "about", element: <About /> },
            { path: "calculator", element: <Calculator /> }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;