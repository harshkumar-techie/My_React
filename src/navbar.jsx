import './assets/stylesheets/navbar.css'
import './assets/stylesheets/global.css'

function Nav() {
    return (

        <nav>
            <div className='logo'>
                <h1>My Project</h1>
            </div>
            <div>
                <ul id='nav_menu'>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </div>
        </nav>

    )
}
export default Nav;