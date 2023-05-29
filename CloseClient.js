
function closeAccount() {
    window.alert("Your account has been closed.");
    window.location.href = "firstpage.html";
}
function confirmCloseAccount() {
    var confirmationDialog = document.getElementById("confirmation-dialog");
    confirmationDialog.style.display = "block";
}
function cancelCloseAccount() {
    var confirmationDialog = document.getElementById("confirmation-dialog");
    confirmationDialog.style.display = "none";
}



