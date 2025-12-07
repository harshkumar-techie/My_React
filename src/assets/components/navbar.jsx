import '../stylesheets/navbar.css'
import '../stylesheets/global.css'
import { NavLink } from 'react-router-dom';

function Nav() {
    function Navopen(e) {
        document.getElementById('navbar').classList.toggle('nav_open');
        document.getElementById('nav_menu').classList.toggle('nav_open');
        document.getElementById('three_dots').classList.toggle('nav_open');
    }

    return (<>
        <nav id='navbar'>
            <div id='logo_btn'>
                <div className='logo'>
                    <h2>My Project</h2>
                </div>
                <button onClick={Navopen} id='three_dots'><div></div><div></div><div></div></button>
            </div>
            <ul id='nav_menu'>
                <li><NavLink to="/My_React/" end className={({ isActive }) => isActive ? 'active_link' : ''}>Home</NavLink></li>
                <li><NavLink to="/My_React/login" className={({ isActive }) => isActive ? 'active_link' : ''}>Login</NavLink></li>
                <li><NavLink to="/My_React/contact_us" className={({ isActive }) => isActive ? 'active_link' : ''}>Contact Us</NavLink></li>
                <li><NavLink to="/My_React/about" className={({ isActive }) => isActive ? 'active_link' : ''}>About</NavLink></li>
            </ul>
        </nav>        
    </>
    )
}
export default Nav;