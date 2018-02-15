var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


var popup = document.querySelector(".modal-sucsess");
var close = popup.querySelector(".modal-sucsess__button");

close.addEventListener("click", function(evt) {
evt.preventDefault();
popup.classList.add("modal-sucsess--close");
});


var modal = document.querySelector(".modal-failure");
var exit = modal.querySelector(".modal-failure__button");

exit.addEventListener("click", function(evt) {
evt.preventDefault();
modal.classList.add("modal-failure--close");
});
