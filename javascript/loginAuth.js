function loginUser() {
    let email = document.querySelector("#emailOrNumber");
    let loginEmailError = document.querySelector(".signinEmailError");
    let password = document.querySelector("#password");
    let loginPasswordError = document.querySelector(".loginPasswordError")


    loginEmailError.innerText = '';
    loginPasswordError.innerText = '';

    if (email.value == '') {
        loginEmailError.innerText = "Please enter your email"
    } else if (password.value == '') {
        loginPasswordError.innerText = "Enter your password"
    }


    let userDataBase = JSON.parse(localStorage.getItem("database"));
    var emailCheck;
    if (userDataBase !== null) {
        userDataBase.forEach(obj => {
            if (email.value !== obj.email || password.value !== obj.password) {
                loginPasswordError.innerText = "Email or password does not exist"
            } else {
                window.location.assign("main_dashboard.html");
            }
        })
    };
}