// FORM LOGIN - REGISTER FILTER :
// form btns
const btnLogin = document.getElementById('btn__login-select');
const btnRegister = document.getElementById('btn__register-select');

// forms
const formLogin = document.getElementById('login-form');
const formRegister = document.getElementById('register-form');

// login-register head text content
const loginRegisterRightHeadTitle = document.querySelector('.login-register__right-head-title');
const loginRegisterRightHeadDescription = document.querySelector('.login-register__right-head-description');

// Transform Settings
const animationSetting = {
    duration : 100,
}

btnLogin.addEventListener('click', () => {
    let btnDataActiveLogin = btnLogin.dataset.active;
    if(btnDataActiveLogin == 'false'){
        btnLogin.setAttribute('data-active', 'true');
        btnLogin.classList.add('login-register__btn-active');
        btnRegister.classList.remove('login-register__btn-active');

        btnRegister.setAttribute('data-active', 'false');

        loginRegisterRightHeadTitle.textContent = 'Giriş Yap';
        loginRegisterRightHeadDescription.textContent = "PlayforFree'ye giriş yap";

        setTimeout(() => {
            formRegister.style.display = 'none';
        }, animationSetting.duration);
        formRegister.style.transform = 'scale(0)';

        setTimeout(() => {
            formLogin.style.transform = 'scale(1)';
        }, animationSetting.duration)
        formLogin.style.display = 'flex';
    }
});

btnRegister.addEventListener('click', () => {
    let btnDataActiveRegister = btnRegister.dataset.active;
    if(btnDataActiveRegister == 'false'){
        btnRegister.setAttribute('data-active', 'true');
        btnRegister.classList.add('login-register__btn-active');
        btnLogin.classList.remove('login-register__btn-active');

        btnLogin.setAttribute('data-active', 'false');

        loginRegisterRightHeadTitle.textContent = 'Kayıt Ol';
        loginRegisterRightHeadDescription.textContent = "PlayforFree'ye kayıt olarak tüm ücretsiz ve indirimli oyunlardan haberdar ol!";

        setTimeout(() => {
            formLogin.style.display = 'none';
        }, animationSetting.duration);
        formLogin.style.transform = 'scale(0)';

        setTimeout(() => {
            formRegister.style.transform = 'scale(1)';
        }, animationSetting.duration)
        formRegister.style.display = 'flex';
    }
})

// FORM VADILATION :

// register element :
const regUsername = document.getElementById('reg-username');
const regEmail = document.getElementById('reg-email');
const regPassword = document.getElementById('reg-password');
const regRepassword = document.getElementById('reg-repassword');

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(regUsername.value === ''){
        const regUsernameErrorMessage = document.querySelector('.reg-username-error-message');
        const regUsernameErrorIcon = document.querySelector('.reg-username-error-icon')
        const regUsernameCheckIcon = document.querySelector('.reg-username-check-icon');

        registerErrorMessage(regUsername, regUsernameErrorMessage, 'Bu alan boş bırakılamaz!', regUsernameErrorIcon, regUsernameCheckIcon)
    } else{
        const regUsernameErrorMessage = document.querySelector('.reg-username-error-message');
        const regUsernameErrorIcon = document.querySelector('.reg-username-error-icon');
        const regUsernameCheckIcon = document.querySelector('.reg-username-check-icon');

        registerCheckMessage(regUsername, regUsernameErrorMessage, regUsernameErrorIcon, regUsernameCheckIcon)
    }

    if(regEmail.value === ''){
        const regEmailErrorMessage = document.querySelector('.reg-email-error-message');
        const regEmailErrorIcon = document.querySelector('.reg-email-error-icon');
        const regUsernameCheckIcon = document.querySelector('.reg-username-check-icon');
       
        registerErrorMessage(regEmail, regEmailErrorMessage, 'Bu alan boş bırakılamaz!', regEmailErrorIcon, regUsernameCheckIcon)
    } else if(!validateEmail(regEmail.value)){
        const regEmailErrorMessage = document.querySelector('.reg-email-error-message');
        const regEmailErrorIcon = document.querySelector('.reg-email-error-icon');
        registerErrorMessage(regEmail, regEmailErrorMessage, "Lütfen geçerli bir e-posta adresi girin!", regEmailErrorIcon)
    } else{
        const regEmailErrorMessage = document.querySelector('.reg-email-error-message');
        const regEmailErrorIcon = document.querySelector('.reg-email-error-icon');
        const regEmailCheckIcon = document.querySelector('.reg-email-check-icon');

        registerCheckMessage(regEmail, regEmailErrorMessage, regEmailErrorIcon, regEmailCheckIcon)
    }

    if(regPassword.value === ''){
        const regPasswordErrorMessage = document.querySelector('.reg-password-error-message'); 
        const regPasswordErrorIcon = document.querySelector('.reg-password-error-icon');
        const regUsernameCheckIcon = document.querySelector('.reg-username-check-icon');

        registerErrorMessage(regPassword, regPasswordErrorMessage, 'Bu alan boş bırakılamaz!', regPasswordErrorIcon, regUsernameCheckIcon)
    } else{
        const regPasswordErrorMessage = document.querySelector('.reg-password-error-message');
        const regPasswordErrorIcon = document.querySelector('.reg-password-error-icon');
        const regPasswordCheckIcon = document.querySelector('.reg-password-check-icon');

        registerCheckMessage(regPassword, regPasswordErrorMessage, regPasswordErrorIcon, regPasswordCheckIcon)
    }

    if(regRepassword.value === ''){
        const regRepasswordErrorMessage = document.querySelector('.reg-repassword-error-message');
        const regRepasswordErrorIcon = document.querySelector('.reg-repassword-error-icon');
        const regUsernameCheckIcon = document.querySelector('.reg-username-check-icon');

        registerErrorMessage(regRepassword, regRepasswordErrorMessage, 'Bu alan boş bırakılamaz!', regRepasswordErrorIcon, regUsernameCheckIcon)
    } else{
        const regRepasswordErrorMessage = document.querySelector('.reg-repassword-error-message');
        const regRepasswordErrorIcon = document.querySelector('.reg-repassword-error-icon');
        const regRepasswordCheckIcon = document.querySelector('.reg-repassword-check-icon');

        registerCheckMessage(regRepassword, regRepasswordErrorMessage, regRepasswordErrorIcon, regRepasswordCheckIcon)
    }
});

function registerErrorMessage(inputName, inputErrorMessage, inputErrorMessageText, inputErrorIcon, inputCheckIcon){
    inputName.style.borderBottomColor = 'red';
    inputErrorMessage.textContent = inputErrorMessageText;
    inputErrorIcon.style.opacity = '1';
    inputCheckIcon.style.opacity = '0';
}

function registerCheckMessage(inputName, inputErrorMessage, inputErrorIcon, inputCheckIcon){
    inputName.style.borderBottomColor = 'green';
    inputErrorMessage.textContent = '';
    inputErrorIcon.style.opacity = '0';
    inputCheckIcon.style.opacity = '1';
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };