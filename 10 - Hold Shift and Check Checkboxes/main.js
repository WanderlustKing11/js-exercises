const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes); // gives us a list of all the nodes (i.e. all the checkboxes);

let lastChecked;

function handleCheck(e) {
  // Check if the shift key was held down
  if(e.shiftKey) {
    
  }

  lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

