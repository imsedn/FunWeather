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