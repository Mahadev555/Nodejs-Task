
const emailInput = document.getElementById('email');
const emailValidation = document.getElementById('emailV');
const emailRegex = /^[a-zA-Z]\w*([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.){1}(com|in|org)))$/;

const alphaInput = document.getElementById('alpha');
const alphaValidation = document.getElementById('alphavalidation');
const alphaRegex =  /^[A-Za-z0-9][A-Za-z0-9\s]{1,11}$/;

const textAreaInput = document.getElementById('textarea');
const textAreaValidation = document.getElementById('textareaValidation');

const AtextAreaInput = document.getElementById('Atextarea');
const AtextAreaValidation = document.getElementById('AtextareaValidation');

const passwordInput = document.getElementById('password');
const passwordValidation = document.getElementById('passwordValidation');

const CpasswordInput = document.getElementById('Cpassword');
const CpasswordValidation = document.getElementById('CpasswordValidation');

const numberInput = document.getElementById('number');
const numberValidation = document.getElementById('numberValidation');
 

const check1 = document.getElementById('mean'); 
const checkValidation = document.getElementById('checkValidation');

 

function validateForm() {


    clearValidattion()
    console.log("nanananananananna")
    if (
        !CpasswordInput.value ||
        !emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())
        || !alphaInput.value.trim() || !alphaRegex.test(alphaInput.value.trim()) 
        || !textAreaInput.value.trim() || !AtextAreaInput.value.trim() || !check1.checked ||
        !passInput.value.trim() || !numberInput.value.trim() ) {
        //email
        if (!emailInput.value.trim()) {
            emailValidation.textContent = 'Email is required';
        }
        else if (!emailRegex.test(emailInput.value.trim())) {
            emailValidation.textContent = 'Invalid email';
        }

        //alpha text
        if (!alphaInput.value.trim()) {
            alphaValidation.textContent = 'Name is Required';
        }
        else if (!alphaRegex.test(alphaInput.value.trim())) {
            alphaValidation.textContent = 'Invalid name';
        }
       
        //textarea
        if (!textAreaInput.value.trim()) {
            textAreaValidation.textContent = 'Description is Required';
        }
        if (!AtextAreaInput.value.trim()) {
            AtextAreaValidation.textContent = 'Address is Required';
        }
        //password
        if (!passInput.value.trim()) {
            passwordValidation.textContent = 'Password is Required';
        }

        if (!CpasswordInput.value.trim()) {
            CpasswordValidation.textContent = 'Confirm Password is Required';
        }
        //phone number
        if (!numberInput.value.trim()) {
            numberValidation.textContent = 'phone number is Required';

        }
     
        //checkbox
        if (!check1.checked) {
            checkValidation.textContent = 'Please Agree';
        }
    }
    else {
        clearForm()
        window.alert("form submitted")
    }
}

// to clear validation msg
function clearValidattion() {
    emailValidation.textContent = '';
    alphaValidation.textContent = '';
    textAreaValidation.textContent = '';
    checkValidation.textContent = '';
    CpasswordValidation.textContent=''
}

// to clear form
function clearForm() {
    emailInput.value = '';
    alphaInput.value = '';
    textAreaInput.value = '';
    passInput.value = '';
    CpasswordInput.value = '';
    numberInput.value = '';
    check1.checked = false
    AtextAreaInput.value=''

}


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

function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = CpasswordInput.value;

    if (password === confirmPassword) {
        // Passwords match
        CpasswordValidation.innerHTML = 'Passwords match';
        CpasswordValidation.style.color = 'green';
    } else {
        // Passwords do not match
        CpasswordValidation.innerHTML = 'Passwords do not match';
        CpasswordValidation.style.color = 'red';
    }
}

// Assuming you want to trigger the check when the user types in the confirm password field
CpasswordInput.addEventListener('input', checkPasswordMatch);


const phoneRegex = /^[1-9]\d{9}$/;
const countryPhoneLengths = {
    'india': 10,
    'pak': 10,
    'uk': 11,
    'usa': 10,
    'china': 11,
    'brazil': 11,
    'russia': 10,
    'indonesia': 11,
    'nigeria': 10,
    'bangladesh': 11,
    'japan': 10,
};

 
numberInput.addEventListener('input', function () {
    numberInput.style.border = '1px solid red';
    let phoneValue = numberInput.value.trim();
    const selectedCountry = document.getElementById('country').value;

    if (!phoneValue) {
        numberValidation.textContent = 'Phone number is required';
    } else if (phoneValue.length > countryPhoneLengths[selectedCountry]) {

        phoneValue = phoneValue.slice(0, countryPhoneLengths[selectedCountry]);

        numberInput.value = phoneValue;
    }

    if (phoneValue.length !== countryPhoneLengths[selectedCountry]) {
        numberValidation.textContent = `Phone number must be exactly ${countryPhoneLengths[selectedCountry]} digits for ${selectedCountry.toUpperCase()}`;
    } else {
        numberInput.style.border = '1px solid #00ff55';
        numberValidation.textContent = '';
    }
});





//alpha text typing 
alphaInput.addEventListener('input', function (event) {
    let alphaValue = alphaInput.value.trim();
    alphaInput.style.border = '1px solid red';

    if (event.data === ' ' || alphaValue.includes(' ')) {
        alphaInput.value = alphaValue.replace(/\s/g, ''); 
        event.preventDefault();
        return;
    }

    if (!alphaValue) {
        alphaValidation.textContent = 'Name is required';
    } else if (alphaValue.length > 10) {
        alphaValue = alphaValue.slice(0, 10);
        alphaInput.value = alphaValue;
        alphaInput.style.border = '1px solid #00ff55';
        alphaValidation.textContent = '';
    } else if (!alphaRegex.test(alphaValue)) {
        alphaValidation.textContent = 'Please enter a name with a maximum of 10 characters';
    } else {
        alphaInput.style.border = '1px solid #00ff55';
        alphaValidation.textContent = '';
    }
});



//text area
textAreaInput.addEventListener('input', function () {
    let textAreaValue = textAreaInput.value.trim();
    textAreaInput.style.border = '1px solid red';

    if (!textAreaValue) {
        textAreaValidation.textContent = 'Description is required';
    } else {
        // Split  
        let words = textAreaValue.split(/\s+/);

        if (words.length > 50) { 
            words = words.slice(0, 50);
            textAreaValue = words.join(' ');
            textAreaInput.value = textAreaValue;
            textAreaInput.style.border = '1px solid #00ff55';
            textAreaValidation.textContent = '';
        } else if (textAreaValue.length < 10) {
            textAreaValidation.textContent = 'Description content should be at least 10 characters';
            textAreaInput.style.border = '1px solid red';
        } else {
            textAreaInput.style.border = '1px solid #00ff55';
            if (containsDuplicateWord(words)) {
                textAreaInput.style.border = '1px solid red';
                textAreaValidation.textContent = 'Duplicate words are not allowed';
            } else {
                textAreaValidation.textContent = '';
            }
        }
    }
});

// Function to check for duplicate words
function containsDuplicateWord(words) {
    const uniqueWords = new Set(words);
    return words.length !== uniqueWords.size;
}

function containsDuplicateWord(text) {
    const wordArray = text.match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(wordArray);

    return wordArray.length !== uniqueWords.size;
}

AtextAreaInput.addEventListener('input', function () {
    let AtextAreaValue = AtextAreaInput.value.trim();
    AtextAreaInput.style.border = '1px solid red'
    if (!AtextAreaValue) {
        AtextAreaValidation.textContent = 'Address is required';
    } else if (AtextAreaValue.length > 20) {
        AtextAreaValue = AtextAreaValue.slice(0, 20);
        AtextAreaInput.value = AtextAreaValue;
        
        AtextAreaInput.style.border = '1px solid #00ff55'
        
    } else if (AtextAreaValue.length > 50) {
        AtextAreaValidation.textContent = 'Address content should be less than 20 characters';
    } else {
        AtextAreaInput.style.border = '1px solid #00ff55'
        AtextAreaValidation.textContent = '';
    }
});


//checkbox 
check1.addEventListener('input', function () {
    const check = check1.value.trim();
    if (check) {
        checkValidation.textContent = '';
    }
});


const passInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');

togglePasswordBtn.addEventListener('click', function () {
    const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passInput.setAttribute('type', type);
    togglePasswordBtn.innerHTML = type === 'password' ? ' <i style="color: white;" class="fa-solid fa-eye"></i>' : ' <i style="color: white;" class="fa-solid fa-eye-slash"></i>';
});



function Login(){
    window.location.href = 'Login.html';
}