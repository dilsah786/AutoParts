const password = document.getElementById("password");
const passwordcheckbox = document.getElementById("show-pswd");
passwordcheckbox.addEventListener("change", function() {
    if (passwordcheckbox.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

const signup = document.getElementById("signup");
signup.addEventListener("click", GoToSignup)

function GoToSignup() {
    window.location.href = "../Signup/signup.html"
}

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("input2").value;
    const password = document.getElementById("password").value;


    const users = JSON.parse(localStorage.getItem("userinfo"));
    let loggedIn = false;
    if (email === "" || password === "") {
        alert("Please fill in all the details.");
    } else if (Array.isArray(users) && users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.email === email && user.password === password) {
                loggedIn = true;
                break;
            }
        }
        if (loggedIn) {
            alert("Login Successful"); // window.location.href=""
        } else {
            alert("Invalid email address or password");
        }
    }


});