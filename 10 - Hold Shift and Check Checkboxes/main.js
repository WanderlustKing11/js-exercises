const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes); // gives us a list of all the nodes (i.e. all the checkboxes);

let lastChecked;

function handleCheck(e) {
  // Check if the shift key was held down
  // AND that is checked
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

