

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getUserInputs();

});

// get user value and trim any spaces 
function getUserInputs(){
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

// show error and add error class
    if(usernameValue === ''){
        setErrorFor(username, 'username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid Email');
    }else{
        setSuccessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'cannot be blank')
    }else{
        setSuccessFor(password)
    }

    if(passwordValue === ''){
        setErrorFor(password2, 'cannot be blank');
    }else if (passwordValue !== password2){
        setErrorFor(password2, 'Password does not match');
    }else{
        setSuccessFor(password2)
    }
// Show a sucess message
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small') // add error message inside the small tag
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
    
}
//
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
// Email validadtion
function isEmail(email){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
}