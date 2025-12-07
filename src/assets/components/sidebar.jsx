import '../stylesheets/global.css';
import '../stylesheets/sidebar.css';
import image from '../img/icons/image.png';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div id="sidebar">
            <div>
                <div id='sidebar_logo'>My Projects</div>
                <ul id='sidebar_menu'>
                    <NavLink to="/My_React/calculator" className={({ isActive }) => isActive ? 'active_link' : ''}><li>Calculator</li></NavLink>
                </ul>
            </div>


            <div>
                <div className='sidebar_footer settings'>
                    <div><img src={image} alt="dh" />
                    </div>
                    <span>Settings</span>
                </div>
                <div className='sidebar_footer' style={{ bottom: "70px" }}>
                    <p>harshkumar_techie</p>
                    <p>© 2026 My Projects</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;