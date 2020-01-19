let title = document.querySelector('h1');
let navBar = document.querySelector('.navbar-collapse');
let navButton = document.querySelector('.navbar-toggler');
let top = document.querySelector('.top');

navButton.addEventListener('click', function() {
  if (navBar.classList.contains('show')) {
    title.classList.add('.top');
  }
  else {
    
  }
})
