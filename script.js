// shows background navbar
const navbar = document.querySelector('.navbar');
((page) => {
  
  page.addEventListener('scroll', ()=> {
    (page.pageYOffset > 110) ? navbar.classList.add('show-bg') : navbar.classList.remove('show-bg');
  });
  
})(window);

// clicking burger button
((burger) => {
  
  burger.addEventListener('click', ()=> document.querySelector('.nav-links').classList.toggle('show'));
  
})(document.querySelector('.burger-btn'));