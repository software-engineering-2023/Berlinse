function SignUp() {
    let username = document.getElementById("ruser").value;
    let password = document.getElementById("rpass").value;
    let repeatPassword = document.getElementById("pass-repeat").value;
    let email = document.getElementById("email").value;

    if (username && password && repeatPassword && email) {
        if (password === repeatPassword) {
            // Display success message
            window.alert("Congratulations! You have successfully signed up for Hamo Bank.");
            // Redirect to sign in page
            window.location.href = "firstPage.html";
        } else {
            window.alert("Passwords do not match. Please try again.");
        }
    } else {
        window.alert("Please fill in all the fields.");
    }
}