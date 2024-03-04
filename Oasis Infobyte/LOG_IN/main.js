function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember").checked;

    console.log("Login clicked");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
}
