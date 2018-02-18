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

if (popup) {
  var close = popup.querySelector(".modal-sucsess__button");
  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-sucsess--close");
  });
}
