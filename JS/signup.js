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
signup.addEventListener("click", GoToLogin)

function GoToLogin() {
    window.location.href = "../Login/login.html"
}

const home = document.getElementById("logo")
logo.addEventListener("click", GoToHome)

function GoToHome() {
    // Change
    window.location.href = ""

}
const signupbtn = document.getElementById("signupbtn");
signupbtn.addEventListener("click", storeData);

function storeData() {
    let username = document.getElementById("input1").value;
    let email = document.getElementById("input2").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all the details.");
        return;
    }

    let userinfo = {
        username: username,
        email: email,
        password: password
    }
    var storedData = localStorage.getItem("userinfo");
    event.preventDefault();

    if (storedData) {
        var existingData = JSON.parse(storedData);
        existingData.push(userinfo);
        localStorage.setItem("userinfo", JSON.stringify(existingData));
    } else {
        var newData = [userinfo];
        localStorage.setItem("userinfo", JSON.stringify(newData));
    }

    alert("Signup Successful");
    window.location.href = "../Login/login.html"
    resetForm();
}

function resetForm() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("password").value = "";
}