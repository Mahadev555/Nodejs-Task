const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passMatcvh = document.getElementById('passMatch')

const array = [
    {
        email: "mahadev@gmail.com",
        password: "mahadev"
    },
    {
        email: "atharvx555@gmail.com",
        password: "atharvx"
    }
    ,
    {
        email: "rhul@gmail.com",
        password: "rahul"
    }
    ,
    {
        email: "shyam@gmail.com",
        password: "shyam"
    }
    ,
    {
        email: "kedar@gmail.com",
        password: "kedar"
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