function login() { //Function definition
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    
    if(username.value === '') {
        alert('Username can not be blank.');
    }

    if(password.value === '') {
        alert('Password can not be blank.');
    }

    //If everything works then send data to server.

    return false;
}
function register() {// Function to register
    var firstname = document.getElementById('firstname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmpassword = document.getElementById('confirmpassword');

    if (firstname.value === '') {
        alert('Given name can not be blank.');
    }
    if (email.value === '') {
        alert('Password can not be blank.');
    }
    if (password.value === '' || confirmpassword.value === '') 
    {
        alert("Password cannpt be blank");
    }
    if (password.value !== confirmpassword.value)
    {
        alert("Passwords donot match!!?");
    }

    return false;
}
