
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

function checkSlide(e) {
  window.requestAnimationFrame(() => {
    console.log(window.scrollY);
    sliderImages.forEach(sldrImg => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) -  (sldrImg.height / 2);
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
  });
}

window.addEventListener('scroll', debounce(checkSlide));