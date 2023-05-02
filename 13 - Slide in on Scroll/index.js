
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');
const bgColor = document.querySelector('html');
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
const minHue = 47;
const maxHue = 200;
const minSat = 100;
const maxSat = 42;
const minLight = 50;
const maxLight = 39;

function checkSlide(e) {
//   console.log(window.scrollY);
  sliderImages.forEach(sldrImg => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) -   (sldrImg.height / 2);
    // bottom of the image
    const imageBottom = sldrImg.offsetTop + sldrImg.height;
    const isHalfShown = slideInAt > sldrImg.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
        sldrImg.classList.add('active');
    } else {
        sldrImg.classList.remove('active');
    }
  });
}

function backgroundShift() {
  let scroll = window.scrollY;
  console.log(scroll);
  let hue = minHue + (maxHue - minHue) * (scroll / maxScroll);
  let sat = minSat + (maxSat - minSat) * (scroll / maxScroll);
  let light = minLight + (maxLight - minLight) * (scroll / maxScroll);
  bgColor.style.backgroundColor = `hsl(${hue}, ${sat}%, ${light}%)`;
}

window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('scroll', backgroundShift);