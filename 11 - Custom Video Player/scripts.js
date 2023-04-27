
// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreen = player.querySelector('.full__screen');

// Build our functions
let isMouseDown = false;

const togglePlay = () => video[video.paused ? 'play' : 'pause']();

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = `${icon}`;
//   console.log(icon);
}

function skip() {
//   console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
//   if (isMouseDown) {
//     this.previousValue = this.value // Store the previous value of the slider
    video[this.name] = this.value;
//     // console.log(this.value);
//   } else if (this.previousValue !== undefined && this.previousValue !== this.value) {
//     video[this.name] = this.value;
//   }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

function toggleFullScreen() {
  player.fullscreen;
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(slider => slider.addEventListener('change', handleRangeUpdate));
ranges.forEach(slider => slider.addEventListener('mousemove', () => isMouseDown && handleRangeUpdate));
ranges.forEach(slider => slider.addEventListener('mousedown', () => isMouseDown = true));
ranges.forEach(slider => slider.addEventListener('mouseup', () => isMouseDown = false));

// ranges.forEach(slider => {
//   slider.previousValue = slider.value; // Initialize previousValue property on each slider
//   slider.addEventListener('change', handleRangeUpdate);
//   slider.addEventListener('input', handleRangeUpdate);
//   slider.addEventListener('mousedown', () => {
//     isMouseDown = true;
//     handleRangeUpdate.call(slider); // call handleRangeUpdate with the slider as 'this'
//   });
//   slider.addEventListener('mouseup', () => isMouseDown = false);
// });

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
progress.addEventListener('mousedown', () => isMouseDown = true);
progress.addEventListener('mouseup', () => isMouseDown = false);

fullScreen.addEventListener('click', toggleFullScreen);
