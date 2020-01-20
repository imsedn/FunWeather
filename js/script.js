//BURGER MENU
let title = document.querySelector('h1');
let navButton = document.querySelector('.navbar-toggler');

navButton.addEventListener('click', function() {
    title.classList.toggle('top');
})
//BURGER MENU end

//SLIDER

let buttonLeft = document.querySelector('.widget-slider-btn_left');
let buttonRight = document.querySelector('.widget-slider-btn_right');
let slide = document.querySelectorAll('.slide');


buttonRight.addEventListener('click', function() {
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

let initialX = null;
let initialY = null;

for (let i = 0; i < slide.length; i++) {
  slide[i].addEventListener("touchstart", startTouch, false);
  slide[i].addEventListener("touchmove", moveTouch, false);
}

let currentSlide = 1;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}

function moveTouch(e) {

    if (initialX === null) {
        return;
    }
    if (initialY === null) {
        return;
    }

    let currentY = e.touches[0].clientY;
    let currentX = e.touches[0].clientX;
    let diffY = initialY - currentY;
    let diffX = initialX - currentX;
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 8) {
            moveToSlide(currentSlide + 1);
        } else if(diffX < -8) {
            moveToSlide(currentSlide - 1);
        }
    }
    initialX = null;
    initialY = null;
    e.preventDefault();
};
function moveToSlide(n) {
  slide[currentSlide].className = 'slide';
  currentSlide = (n + slide.length) % slide.length;
  slide[currentSlide].className = 'slide active'; 
}









// buttonRight.addEventListener('click', function(){
//   slide.forEach(function callback(elem, index) {
//     let lastImg = slide[slide.length - 1].childNodes[0];
//     if (index < slide.length - 1) {
//       let image = elem.childNodes[0];
//       image.remove();
//       slide[index + 1].append(image);
//     }
//     else if (index == slide.length - 1) {
//       slide[0].append(lastImg);
//     }
//   });
// })

// buttonLeft.addEventListener('click', function(){
//   slide.forEach(function callback(elem, index) {
//     let firstImg = slide[0].childNodes[0];
//     let image = elem.childNodes[0];
//      slide[2];
//     if (index >= 0) {
//       image.remove();
//       slide[slide.length - 1].append(firstImg);
//       slide[index - 1].append(image);
//     }
//     // else if (index = 0) {
//     //   slide[slide.length - (slide.length / 2)].append(firstImg);
//     // }
    
//   });
// })