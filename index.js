const emailInput = document.querySelector('.subscription-input')
const errorMessage = document.querySelector('.subcription-error')
const modal = document.querySelector('.modal-container')

//regular expresion from: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email
const emailRegexExpresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

function verifyEmail(){
    const email = emailInput.value

    if(!emailRegexExpresion.test(email)){
        errorMessage.classList.remove('subcription-error')
        errorMessage.classList.add('subcription-error--active')
        emailInput.classList.add('subscription-input_error--active')
        return
    }

    errorMessage.classList.add('subcription-error')
    errorMessage.classList.remove('subcription-error--active')
    emailInput.classList.remove('subscription-input_error--active')

    modal.style.display = 'flex'
}

function closeModal(){
    modal.style.display = 'none'
}