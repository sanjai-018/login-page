function handleRegister(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let userDetails;
    let user = {
        name: name,
        email: email,
        password: pass
        }
        if(name == "" || email == "" || pass == ""){
            alert("Please fill all the fields");
            }else{
                userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
                userDetails.push(user);
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
                alert("Registration Successful");
                window.location.href = "Login.html";
                }
}