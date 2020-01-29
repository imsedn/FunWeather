//BURGER MENU
let title = document.querySelector('h1');
let navButton = document.querySelector('.navbar-toggler');

navButton.addEventListener('click', function() {
    title.classList.toggle('top');

})
//BURGER MENU

//SLIDER

let buttonLeft = document.querySelector('.widget-slider-btn_left');
let buttonRight = document.querySelector('.widget-slider-btn_right');
let slide = document.querySelectorAll('.slide');
let imgActive = document.querySelector('.active');


buttonRight.addEventListener('click', function() {
  if (imgActive.classList.contains('skew') || imgActive.classList.contains('ske')) {
    imgActive.classList.remove('skew');
    imgActive.classList.remove('ske');
    function addSkew() {
      imgActive.classList.add('skew');
    }
    setTimeout(addSkew, 30);
  }
  else {
    imgActive.classList.add('skew');
  }
  for (let i = 0; i < slide.length; i++) {
    let img = slide[i].childNodes[0];
    let lastImg = slide[slide.length - 1].childNodes[0];
    if (i < slide.length - 1) {
      img.remove();
      slide[i + 1].append(img);
    }
    else if (i == slide.length - 1) {
      slide[0].append(lastImg);
    }
  }
});

buttonLeft.addEventListener('click', function() {
  if (imgActive.classList.contains('ske')) {
    imgActive.classList.remove('ske');
    imgActive.classList.remove('skew');
    function addSkew() {
      imgActive.classList.add('ske');
    }
    setTimeout(addSkew, 30);
  }
  else {
    imgActive.classList.add('ske');
  }
  for (let i = slide.length - 1; i >= 0; i--) {
    let img = slide[i].childNodes[0];
    let firstImg = slide[0].childNodes[0];
    if (i == 0) {
      img.remove();
      slide[slide.length - 1].append(firstImg);
    }
    else if (i <= slide.length - 1) {
      slide[i - 1].append(img);
    }
  }
});

// SLIDE TOUCH

// let initialX = null;
// let initialY = null;

// for (let i = 0; i < slide.length; i++) {
//   slide[i].addEventListener("touchstart", startTouch, false);
//   slide[i].addEventListener("touchmove", moveTouch, false);
// }

// let currentSlide = 1;

// function startTouch(e) {
//     initialX = e.touches[0].clientX;
//     initialY = e.touches[0].clientY;
// }

// function moveTouch(e) {

//     if (initialX === null) {
//         return;
//     }
//     if (initialY === null) {
//         return;
//     }

//     let currentY = e.touches[0].clientY;
//     let currentX = e.touches[0].clientX;
//     let diffY = initialY - currentY;
//     let diffX = initialX - currentX;
//     if (Math.abs(diffX) > Math.abs(diffY)) {
//         if (diffX > 8) {
//             moveToSlide(currentSlide + 1);
//         } else if(diffX < -8) {
//             moveToSlide(currentSlide - 1);
//         }
//     }
//     initialX = null;
//     initialY = null;
//     e.preventDefault();
// };
// function moveToSlide(n) {
//   slide[currentSlide].className = 'slide';
//   currentSlide = (n + slide.length) % slide.length;
//   slide[currentSlide].className = 'slide active'; 
// }

// // SCROLL TOP

// let goTopBtn = document.querySelector('.footer-btn');
// let header = document.querySelector('.header');

// function upButtonClick() {
//   header.scrollIntoView({block: "center", behavior: "smooth"});
// }

// goTopBtn.addEventListener('click', upButtonClick);
// goTopBtn.addEventListener('touchstart', upButtonClick);

// // SCROLL DOWN

// let goDownBtn = document.querySelector('.main-scroll');
// let widget = document.querySelector('.widget-slider-btn_left');

// function downButtonClick() {
//   widget.scrollIntoView({block: "center", behavior: "smooth"});
// }

// goDownBtn.addEventListener('click', downButtonClick);
// goDownBtn.addEventListener('touchstart', downButtonClick);