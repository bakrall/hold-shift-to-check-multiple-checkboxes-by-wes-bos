const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked;

function handleCheck(e) {
	//check if they had the shift key down
	//AND check that they are being checked and not unchecked
	let inBetween = false;

	if(e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				//'this' is the checkbox checked first and 'lastChecked' is the checkbox checked last
				//looping over all the checkboxes, when either is met first, inBetween is set to true
				//then when the second of them is met, inBetween is again set to false
				inBetween = !inBetween;
			}
		});
	}
	
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));