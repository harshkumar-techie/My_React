export function login() {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;

    if (username.length < 6 && password.length < 10) {
        alert("username or password is not valid")

    } else {
        alert("Your Username is " + username + "\nYour Password is " + password)
    }
}