// Script 10.7- register.js
// This script validates a form.
function validateUsername(username) {
    //Returns true if the given username matcher the following criteria
    //1. Is 8 or more characters long
    //2. First character is A-Z or a-z
    //3. contains at least one numeral
    //Returns false otherwise
    var char1;
    var hasNumber;
    //Check username length
    if (username.length < 8) {
        message = "Username must be >= 8 characters";
        return false;
    }
    //Check the first digit
    char1 = username.substr(0,1).toUpperCase();
    if (!(char1 >= "A" && char1 <= "Z")){
        message = "Username must begin with A-Z or a-z";
        return false;
    }
    //Check if there is at least one digit
    hasNumber = /\d/;
    if (!(hasNumber.test(username))) {
        message = "username must contain at least one number";
        return false;
    }
    //Alternate method:
    var anyDigits;
    for (var i = 1; i < username.length; i++)
    {
        char1 = username.substr(i,1);
        if(char1 >= "0" && char1 <= "9") {
            anyDigits = true;
            break; //found a digit, exit loop
        } //end if
    } //end for
    if (!(anyDigits)) {
        return false
    }
    //All criteria has been met
    return true;
}
// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';
    //Handles window-generated events (i.e. non-user)
    if (typeof e == 'undefined') {
        e = window.event;
    }
    //Get form object references
    var firstName = U.$("firstName");
    var lastName = U.$("lastName");
    var email = U.$("email");
    var userName = U.$("userName");
    var phone;
    var city;
    var state;
    var zip;
    var terms; //We'll add these later....
    //Flag variable
    var error = false;
    //Validate the first name:
    if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
        //Everything between / and / is the expression
        //Allows any letter A-Z (case insensitive)
        //Allows spaces, periods, and hyphens
        //Name must be 2-20 characters long
        //alert("Valid first name");
        removeErrorMessage('firstName');
    }
    else {
        //alert("Invalid first name");
        addErrorMessage(
            'firstName',
            'Invalid/missing first name'
        );
        error = true;
    }
    var msg = "initial message";
    if (validateUsername(userName)) {
        removeErrorMessage('userName');
    }
    else {
        addErrorMessage(
            "userName",msg,
            'username does not meet criteria'
        );
        error = true;
    }
    //Validate the last name:
    if (/^[A-Z \.\-']{2,30}$/i.test(lastName.value)) {
        //alert("Valid last name");
        removeErrorMessage('lastName');
    }
    else {
        //alert("Invalid last name");
        addErrorMessage(
            'lastName',
            'Invalid/missing last name'
        );
        error = true;
    }
    //Validate the email:
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
        //Everything between / and / is the expression
        //Allows any letter A-Z (case insensitive)
        //Allows spaces, periods, and hyphens
        //Name must be 2-20 characters long
        //alert("Valid first name");
        removeErrorMessage('email');
    }
    else {
        //alert("Invalid first name");
        addErrorMessage(
            'email',
            'Invalid/missing email name'
        );
        error = true;
    }
    //Validate the phone:
    if (/d{4}[ \-\.]?\d{4}[ \-\.]?\d{3}/i.test(phone.value)) {
        //alert("Valid phone");
        removeErrorMessage('phone');
    }
    else {
        //alert("Invalid  phone");
        addErrorMessage(
            'lastName',
            'Invalid/missing numbers'
        );
        error = true;
    }
    //Validate the zip code:
    if (/^\d{5}(-\s{4})?$/i.test(zip.value)) {
        //alert("Valid last name");
        removeErrorMessage('zip');
    }
    else {
        //alert("Invalid last name");
        addErrorMessage(
            'zip',
            'Invalid/missing numbers'
        );
        error = true;
    }
    //Prevent form from resubmitting
    if (error) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }
    return false;
} // End of validateForm() function.
// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
    'use strict';
} // End of toggleSubmit() function.
// Establish functionality on window load:
window.onload = function() {
    'use strict';
    U.addEvent(
        //Takes 3 arguments:
        //1. What object is calling the event?
        //2. What is the event?
        //3. What is the handler (function)?
        U.$('theForm'),
        'submit',
        validateForm);
};