const showpassword = () =>{
    var pass = document.getElementById("passwords");
    if(pass.type == "password"){
        document.getElementById("passwords").type = "text";
    }else{
        document.getElementById("passwords").type = "password";
    }
}
const validatelogin = () =>{
    var username =  document.getElementById("username").value.trim();
    var passwords =  document.getElementById("passwords").value.trim();
    if(username == "" || passwords == ""){
        alert("please add all required fields");
        return false;
    }else{
        return true;
    }
}
const closesignups = () =>{
    document.getElementById("signup-main").style.display = "none";
    document.getElementById("signup-sub").style.display = "none";
}
const opensignups = () =>{
    document.getElementById("signup-main").style.display = "block";
    document.getElementById("signup-sub").style.display = "block";
}