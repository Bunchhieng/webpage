function getInputs() {
    var email = document.getElementById('email').value,
        password = parseInt(document.getElementById('password').value),
        errorUser = document.getElementById('errorUser'),
        errorPass = document.getElementById('errorPass'),
        content = document.getElementById('content');

    /* 
        Validate password to make sure it greater/equal to 5 digits
        */
    if (password.length < 5 || password == "" || password == null) {
        errorPass.innerHTML = "<p style='color: red'>Please provide a correct password.</p>";
        return false;
    }

    /*
        Validate email address 
        
        http://jsbin.com/moleyakeja/1/edit
        
        When and Why to use return false in js?
        http://stackoverflow.com/questions/855360/when-and-why-to-return-false-in-javascript
        */
    /*if (validateEmail(email)) {
        errorUser.value(email + " is valid :)");
        errorUser.css("color", "green");
    } else {
        errorUser.text(email + "is not valid :(");
        errorUser.css("color", "red");
        return false;
    }*/

    content.innerHTML = email + "<br />" + password;
}

function validateEmail(email) {
    /*
        Regex to validate email address is taken from StackOverFlow
        http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        */
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
}