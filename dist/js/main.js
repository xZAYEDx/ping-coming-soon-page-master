/************************* */
/* Targeting the ID's and classes */
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


/* Nameing the ID's and classes */
let email = id("email"),
    form = id("form"),
    errorMsg = classes("error");

/* To prevent the flickering*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(email, 0, "Please provide a valid email address");

});

//Regular expression 
const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    /* To check the error message*/
let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "1px solid #ff5263";

    } else if (!isValidEmail) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "1px solid #ff5263";


    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "1px solid #4f7df3";
        alert("Thank you for subscribing!");
        email.value = '';
    }

}