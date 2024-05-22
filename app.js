const username = document.querySelector('#username')
const email = document.querySelector('#email')
const CNIC = document.querySelector('#CNIC')
const password = document.querySelector('#password')
const form = document.querySelector('#form')


let userregex = /^.{4,13}$/;
let emailregex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
let CNICregex = /^423\d{10}$/;
let passwordregex =/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    // console.log(username.value);
    // console.log(email.value);
    // console.log(CNIC.value);
    // console.log(password.value);

    // console.log(userregex.test(username.value));
    // console.log(emailregex.test(email.value));
    // console.log(CNICregex.test(CNIC.value));
    // console.log(passwordregex.test(password.value));


    if (userregex.test(username.value)) {
        console.log(username.value);
        
    }
    if (emailregex.test(email.value)) {
        console.log(email.value);
        
    }
    if (CNICregex.test(CNIC.value)) {
        console.log(CNIC.value);
        
    }
    if (passwordregex.test(password.value)) {
        console.log(password.value);
        
    }


    
})



