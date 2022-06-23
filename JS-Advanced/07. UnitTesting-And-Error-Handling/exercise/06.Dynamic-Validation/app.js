function validate() {
    let emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', () => {
        let emailText = emailInputElement.value;
        let patern = /[a-z]+@[a-z]+.[a-z]+/gm;
        
        if (patern.test(emailText)) {
            emailInputElement.removeAttribute('class');
        } else {
            emailInputElement.setAttribute('class', 'error')
        }
    });
}