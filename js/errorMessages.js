// Script 10.1 - errorMessages.js
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
    'use strict';

    //Get the element we want to add an
    //error message element to:
    var elem = U.$(id);

    //Define a new span for the message
    var newId = id + 'Error';
    //example: firstNameError

    var span =U.$(newId);
    if (span){
        span.firstChild.value=msg;
    }
    else {
        //"else" means span does NOT allready exist, so add it
    span=document.createElement("span");
    span.id=newId;
    span.className="error";
    span.appendChild(
        document.createTextNode(mag)
    );
        elem.parentNode.appendChild(span);
        
    }
} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
    'use strict';

} // End of removeErrorMessage() function.