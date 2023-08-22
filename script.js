function passValidate() {
    var password = document.getElementById("field2").value;
    var pass_length = password.length;

    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasAlphanumeric = /[0-9a-zA-Z]/.test(password);

    if (pass_length < 6) {
        alert("Password must be at least 6 characters long.");
    } else if (!hasUppercase || !hasLowercase || !hasAlphanumeric) {
        alert("Password must have at least one uppercase letter, one lowercase letter, and one alphanumeric character.");
    } else {
        alert("Login Successful!");
        window.open("dash.html");
    }
}
