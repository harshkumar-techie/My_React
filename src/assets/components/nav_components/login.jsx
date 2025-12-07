import '../../stylesheets/navbar.css'
import '../../stylesheets/login.css'
import { login } from '../../js/script'


function Login() {
        return (
            <>
                <div id='main_login_container'>
                    <div id='login_form'>
                        <div><h1>Welcome to My Website</h1></div>
                        <div>
                            <h1>Enter Username</h1>
                            <input type="text" id='Username' />
                        </div>
                        <div>
                            <h1>Enter Password</h1>
                            <input type="password" id='password' />
                        </div>
                        <div><button id='Login_btn' onClick={login} >Login</button></div>
                    </div>
                </div>
            </>

        )
    }

export default Login;