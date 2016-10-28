// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateUsername(username) {
    //Returns turue if the given username
    //matches the folowing criteria
    //1. is 8 or more charters long
    //2. first charter is A-Z or a-z
    //3.contains at least one numaral
    //returns false otherwise

    var char1;
    var hasNumber;
    if (username.length<8) return false;
    //check the first dig
    char1=username.substr(0,1).toUpperCase();
    if (!(char1>="A"&&char1<="Z")){return false;}
//check to see if there is atleaast one didget
    hasNumber=/\d/;
    if (!(hasNumber.test(username))){return false;}
    //all critera has been met
    return true;



}
function validateForm(e) {
    'use strict';

    //Handles window-generated events (i.e. non-user)
    if (typeof e == 'undefined') {
        e = window.event;
    }

    //Get form object references
    var firstName = U.$("firstName");
    var lastName;
    var email;
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