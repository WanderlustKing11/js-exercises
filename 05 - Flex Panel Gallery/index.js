

const panels = document.querySelectorAll('.panel');
let timeoutIds = new Map(); // store timeout IDs for each panel. Allows us to keep track of each panel's timeout ID in a more organized and efficient way, without havin gto create a separate variable for each pane's timeout ID.

// opens panel when hover over/clicked on
function toggleOpen() {
  this.classList.add('open');
};

function toggleClose() {
    this.classList.remove('open', 'open-active');
}

// when the panel 'open' transition ends, the open-active class will be toggled and transition the targert's text onto the screen.
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex') && this.classList.contains('open')) {
    this.classList.toggle('open-active');
  }
}

function timedOpen(panel) {
    timeoutIds.set(panel, setTimeout(() => {
    toggleOpen.call(panel);
  }, 500));
}

function timedClose(panel) {
    timeoutIds.set(panel, setTimeout(() => {
    toggleClose.call(panel);
  }, 500));
}

// ensure that ohnly the panel currently being hovered over will be opened, and any other panels that were previously hovered will be closed
function cancelTimeout(panel) {
  const timeoutId = timeoutIds.get(panel);
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutIds.delete(panel);
    }
}

panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    cancelTimeout(panel);
    toggleOpen.call(panel);
  });
  panel.addEventListener('mouseleave', () => {
    timedClose(panel)
  });
  panel.addEventListener('transitionend', toggleActive);  
});

// added 'mousemove' event to detect when the mouse moves over child elements (the individual panels). Allows us to cancel any existing timeouts for the current panel whenever the mouse moves to a different panel. 
document.addEventListener('mousemove', (event) => {
    const target = event.target;
    if (target.classList.contains('panel')) {
      cancelTimeout(target);
      timedOpen(target);
    }
  });