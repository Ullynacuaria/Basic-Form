const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getUserInputs();

});

function getUserInputs(){
    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()

}