
// Exercise 6
document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault();
	validate();
});

function validate() {

	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail"); 
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone"); 
	
	clearErrors([fName, fEmail, fAddress, fLastN, fPassword, fPhone]);
	
	// Validate fields entered by the user: name, phone, password, and email
	
	if(fName.value =="" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)){
		error++;
		showError(fName, errorName, 'This field is required and must have, at least, 3 characters');
	}
	
	if (fLastN.value == "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
		error++;
        showError(fLastN, errorLastN, 'This field is required and must have, at least, 3 characters');
    }
	
	if(fEmail.value == "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)){
		error++;
		showError(fEmail, errorEmail, 'This field is required and must contain an @ and have, at least, 3 character');
	}
	
	if(fAddress.value == "" || fAddress.value.length < 3) {
		error++;
		showError(fAddress, errorAddress, 'This field is required and must have, at least, 3 characters');
	}
	
	if (fPassword.value == "" || !/[a-zA-Z]/.test(fPassword.value) || !/\d/.test(fPassword.value) || fPassword.value.length < 3) {
		error++;
        showError(fPassword, errorPassword,'Enter a correct password');
    }
	
	if (fPhone.value == "" || !/^\d+$/.test(fPhone.value)) {
		error++;
        showError(fPhone, errorPhone, 'Invalid phone number!! Must be 9 digits with no letters');
    }
	
	if(error === 0){
		alert("OK");
	}

	
}

function showError(input, errorElement, message) {
	input.style.borderColor = 'red';
	errorElement.textContent = message;
	errorElement.style.color = 'red';
	errorElement.style.display = 'block';
}

function clearErrors(inputs) {
    inputs.forEach(function(input) {
        input.style.borderColor = '';
        var errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('invalid-feedback')) {
            errorElement.style.display = 'none';
            errorElement.textContent = '';
        }
	});
}