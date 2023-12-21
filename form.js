let form = document.querySelector('form');
let userName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById('phone');
let select = document.getElementById('select');
let nameError = document.getElementById('nameError'),
    emailError = document.getElementById('emailError'),
    phoneError = document.getElementById('phoneError'),
    subjectError = document.getElementById('subjectError');

function sendEmail() {

    const bodyMessage = `Full Name: ${userName.value} <br> Email: ${email.value} <br> Phone: ${phone.value}`

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rahullearnwithfraternity@gmail.com",
        Password: "6618337F5CAE16A4A453F31311940DA26D83",
        To: 'rahullearnwithfraternity@gmail.com',
        From: "rahullearnwithfraternity@gmail.com",
        Subject: "This is the subject",
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}
function validateName() {
    let name = document.getElementById('name').value.trim();

    if (name.length == 0) {
        nameError.innerHTML = "*Name is required";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    let phoneNumber = document.getElementById("phone").value.trim();
    if (phoneNumber.length == 0) {
        phoneError.innerHTML = "*Phone number is required.";
        return false;
    }

    else if (phoneNumber.length <= 7 || phoneNumber.length >= 15) {
        phoneError.innerHTML = "*Phone number invalid";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    let email = document.getElementById("email").value.trim();
    if (email.length == 0) {
        emailError.innerHTML = "*Email is required.";
        return false;
    }
    var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.innerHTML = "*Invalid Email Address format";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function clearError() {
    nameError.innerHTML = '';
    phoneError.innerHTML = '';
    emailError.innerHTML = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateName() == true && validateEmail() == true && validatePhone() == true) {
        sendEmail();

        clearError()
        form.reset();
        return false;
    }
    // sendEmail();
})