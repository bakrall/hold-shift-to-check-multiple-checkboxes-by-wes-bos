const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked;

function handleCheck(e) {
	
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));