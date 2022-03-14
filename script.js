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

// animations
const loadIntro =()=> {

  const headerTitle = document.querySelector('.header-title');

  document.querySelectorAll('.intro-txt span').forEach(txt => txt.style.transform = 'translateX(0)');

  document.querySelector('.red-slider').style.transform = 'translateX(100%)';

  document.querySelector('.intro-txt-contain').style.transform = 'translateX(100%)';

  headerTitle.style.opacity = 1;

  headerTitle.style.transform = 'translateY(0)';

} 
