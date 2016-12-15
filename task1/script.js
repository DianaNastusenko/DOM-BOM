// Create form and inputs
var form = createE(document.body, 'form', {
    name: "login",
    action: "google.com"
});
var inputAge = createE(form, 'input', {
    type: "text",
    name: "age",
    placeholder: "Age"
});
var inputUsername = createE(form, 'input', {
    type: "text",
    name: "username",
    placeholder: "Username"
});
var inputDate = createE(form, 'input', {
    type: "text",
    name: "date",
    placeholder: "Date"
});
var buttonSubmit = createE(form, 'input', {
    type: "submit",
    value: "Validate Me"
});


buttonSubmit.onclick = function() {
    // Validation indicator
    var validationSuccess = true;
    // Inputs values
    var ageValue = inputAge.value;
    var usernameValue = inputUsername.value;
    var dateValue = inputDate.value;
    var submitValue = buttonSubmit.value;
    
    return validation(ageValue,usernameValue,dateValue);
};

//---- Validation functions START----//

// Age Validation
function validation(ageValue,usernameValue,dateValue,validationSuccess) {
    if (ageValue.match(/-/)) {
        alert("Your Age is invalid! Age should be more then  0!");
        validationSuccess = false;
    } else if (ageValue.match(/^0/)) {
        alert("Your Age is invalid! Age should be more then  0!");
        validationSuccess = false;
    } else if (!ageValue.match(/^(\d)*$/g)) {
        alert("Your Age is invalid! Age must include only numbers!");
        validationSuccess = false;
    } else if (ageValue.match(/ /)) {
        alert("Your Age is invalid! Age must include only numbers!");
        validationSuccess = false;
    }

//Username validation
    if (!usernameValue.match(/^(user_)[\S]*/g)) {
        alert("Your User Name is invalid! User Name should start from 'user_' and can contain any symbols after!");
        validationSuccess = false;
    }

//Date validation
    var currentDate = moment().format('DD/MM/YYYY');
    if (currentDate !== dateValue) {
        alert("Your data is invalid! Please enter today's date. Date should be in format DD/MM/YYYY!");
        validationSuccess = false;
    }
    return validationSuccess;
}
//---- Validation functions END----//



//Create elemets in html page
function createE(parentElement, element, attributesObj) {
    //Create element
    var newCreatedElement = document.createElement(element);
    //Add attributes to new created element
    for (var attribute in attributesObj) {
        newCreatedElement.setAttribute(attribute, attributesObj[attribute]);
    }
    //Add node parent
    parentElement.appendChild(newCreatedElement);
    return newCreatedElement;
}