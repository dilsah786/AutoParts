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