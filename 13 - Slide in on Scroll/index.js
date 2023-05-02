
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
//   let saturation = 100 - (scroll / maxScroll) * 100;
  let light = (100 - (scroll / maxScroll) * 100) / 2;
  bgColor.style.backgroundColor = `hsl(47, 100%, ${light}%)`;
}

window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('scroll', debounce(backgroundShift));