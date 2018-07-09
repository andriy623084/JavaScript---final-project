//Login Popin
function loginPopin() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("submitButton");
    var span = document.getElementsByClassName("modal__content_close")[0];// Get the <span> element that closes the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };
    span.onclick = function() { // When the user clicks on <span> (x), close the modal
        modal.style.display = "none";
    };
    window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
loginPopin();

//Register the new user
function setData() {
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('last-name').value;
    var userEmail = document.getElementById('email').value;
    var Userpassword = document.getElementById('password').value;
    var divUnderPassword = document.getElementById('div2');
    var divUnderEmail = document.getElementById('error-place-foremail');
    var address = document.getElementById('address').value;
    var zipCode = document.getElementById('zip-code').value;
    var phone = document.getElementById('phone').value;
    var re =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    divUnderEmail.style.color = 'red';
    divUnderPassword.style.color = 'red';
    if (userEmail.length === 0)
    {
        divUnderEmail.innerHTML = 'Email is mandatory field'
    }else if(!re.test(userEmail)){
        divUnderEmail.innerHTML = 'Please provide a valid email address';
        return false;
    }else {
        if (Userpassword.length < 6){
            divUnderPassword.innerHTML = 'length of password has to be minimum 6 symbols';
        }else{
            var User = {
                Username: firstName, Lastname: lastName, UserEmail: userEmail, UserPassword: Userpassword, UserAddress: address, UserZip: zipCode, UserPhone: phone
            };
            var localData = JSON.stringify(User);
            localStorage.setItem("user", localData);
            window.open('checkout.html',"_self")
        }
    }
}

//Login fuctionality
function LoginUser() {
    var loginUseremail = document.getElementById('Loginemail').value;
    var loginUserPassword = document.getElementById('Loginpassword').value;
    var placeForError = document.getElementById('place-for-error-onlogin');
    placeForError.style.color = 'red';
    if(localStorage.getItem('user')){
        var LoginParseData = localStorage.getItem('user');
        var parseJsonOnLoginPage = JSON.parse(LoginParseData);
        if(loginUseremail === parseJsonOnLoginPage.UserEmail && loginUserPassword === parseJsonOnLoginPage.UserPassword){
            window.open('successful-page.html',"_self")
        }else{
            placeForError.innerHTML = 'Email or password is wrong';
        }
    }else {
        placeForError.innerHTML = 'User doesn`t exist'
    }
}