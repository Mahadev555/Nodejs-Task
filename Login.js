
const passMatcvh = document.getElementById('passMatch')


const array = [
    {
        email: "mahadev@gmail.com",
        password: "Mahadev@1"
    },
    {
        email: "atharvx555@gmail.com",
        password: "Atharvx@1"
    }
    ,
    {
        email: "rhul@gmail.com",
        password: "Rahul@1"
    }
    ,
    {
        email: "shyam@gmail.com",
        password: "Shyam@1"
    }
    ,
    {
        email: "kedar@gmail.com",
        password: "Kedar@1"
    }
]

function navDashboard(url) {
    window.location.href = url
}

function enableAlert() {
    passMatcvh.style.display = 'block';
}



function submitData() {

    const email = document.getElementById('email')
    const pass = document.getElementById('pass')

    let valueEmail = email.value;
    let valuePass = pass.value.trim();



    const emailValidationMessage = document.getElementById('EmailValidation');
    const passValidationMsg = document.getElementById('PasswordValidation');

    emailValidationMessage.textContent = '';
    passValidationMsg.textContent = '';


    if (!valueEmail) {
        emailValidationMessage.textContent = 'Email is required';
        return;
    }
    else if (!emailRegex.test(valueEmail)) {
        emailValidationMessage.textContent = 'Invalid email address';
    }

    else if (!valuePass) {
        passValidationMsg.textContent = 'Password is required';

        return;
    }

    else {
        const result = array.filter(valuee => valuee.email === valueEmail);

        console.log(valueEmail)
        if (result.length != 0) {
            const password1 = result[0].password;
            if (valuePass === password1) {

                enableAlert()
                setTimeout(() => {
                    navDashboard('Dashboard.html')
                }, 1000)
            }
            else {
                window.alert('password not  matched')
            }
        } else {
            window.alert('Email not found');
        }
    }
}


const passInput = document.getElementById('pass');
const togglePasswordBtn = document.getElementById('togglePassword');

togglePasswordBtn.addEventListener('click', function () {
    const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passInput.setAttribute('type', type);
    togglePasswordBtn.innerHTML = type === 'password' ? ' <i class="fa-solid fa-eye"></i>' : ' <i class="fa-solid fa-eye-slash"></i>';
});

function Sign(){
    window.location.href = 'index.html';
}


const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pass')
const passwordValidation = document.getElementById('passwordValidation');
const emailValidation = document.getElementById('emailV');
const emailRegex = /^[a-zA-Z]\w*([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.){1}(com|in|org)))$/;

//email typing validation
emailInput.addEventListener('input', function () {
    let emailValue = emailInput.value.trim();
    emailInput.style.border = '1px solid red'
    if (!emailValue) {
        emailValidation.textContent = 'Email address is required';
    } else if (emailValue.length > 60) {
        // Trim the email to 30 characters
        emailValue = emailValue.slice(0, 60);
        emailInput.value = emailValue;
        if (!emailRegex.test(emailValue)){
            emailInput.style.border = '1px solid red'
        }else{
            emailInput.style.border = '1px solid #00ff55'
        }   
    } else if (!emailRegex.test(emailValue)) {
        emailValidation.textContent = 'Invalid email address';
    } else if (emailValue.split('.').length > 3) {
        emailValidation.textContent = 'you can not enter more than 2 dot in your email id';
    } else {
        emailInput.style.border = '1px solid #00ff55'
        emailValidation.textContent = '';
    }
});


// password typing validation
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,16}$/;

passwordInput.addEventListener('input', function () {
    let passwordValue = passwordInput.value.trim();
    passwordInput.style.border = '1px solid red'

    if (!passwordValue) {
        passwordValidation.textContent = 'Password is required';
    } else if (passwordValue.length > 16) {
        passwordValue = passwordValue.slice(0, 16);
        passwordInput.value = passwordValue; 
        if (!passwordRegex.test(passwordValue)){
            passwordInput.style.border = '1px solid red'
        }else{
            passwordInput.style.border = '1px solid #00ff55'
        }
    } else if (passwordValue.length < 8) {
        passwordValidation.textContent = 'Password must be at least 8 characters';
    } else if (!passwordRegex.test(passwordValue)) {
        passwordValidation.textContent = 'Password must contain at least one special character, number, and capital letter';
    } else {
        passInput.style.border = '1px solid #00ff55'
        passwordValidation.textContent = '';
    }
});