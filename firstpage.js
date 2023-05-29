function Login()  {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    console.log(username);
    console.log(password);
    if (username === "Antoun.atef" && password === "123"){
        window.location.href = "client.html";
    }
    else if (username === "Basem.ashraf" && password === "123"){
        window.location.href = "admin.html";
    }
    else if (username === "Ahmad.hamdan" && password === "123"){
        window.location.href = "banker.html";
    }
    else{
        window.alert("Invalid username/password")
    }

}