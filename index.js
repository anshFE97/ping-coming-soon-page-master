const error = document.querySelector('.error')
const submit = document.querySelector('.notify')
const mail = document.querySelector('.mail')


function check(e) {
    if(mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        error.classList.remove('active')
        mail.classList.remove('border')
    } else {
        error.classList.add('active')
        mail.classList.add('border')
        e.preventDefault();
    }

}

submit.addEventListener('click', check)

mail.addEventListener('click', () => {
    error.classList.remove('active')
        error.classList.remove('active')
        mail.classList.remove('border')
})