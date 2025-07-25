/*--------------------------------------------------
  Mobile Navigation Toggle
--------------------------------------------------*/
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.classList.toggle('open');
});

/* close drawer on link click (mobile) */
document.querySelectorAll('.nav__list a').forEach(link =>
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.classList.remove('open');
    }
  })
);

/*--------------------------------------------------
  IntersectionObserver  (scroll-in animations)
--------------------------------------------------*/
const animatedEls = document.querySelectorAll('[data-animate]');
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const type = entry.target.dataset.animate;
      entry.target.classList.add(`animate--${type}`);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

animatedEls.forEach(el => io.observe(el));

/*--------------------------------------------------
  Carousel helpers  (works for every .carousel)
--------------------------------------------------*/
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel__track');
  carousel.querySelector('.prev').addEventListener('click', () =>
    track.scrollBy({ left: -track.offsetWidth * 0.8, behavior: 'smooth' })
  );
  carousel.querySelector('.next').addEventListener('click', () =>
    track.scrollBy({ left:  track.offsetWidth * 0.8, behavior: 'smooth' })
  );
});

/*--------------------------------------------------
  Dynamic Year
--------------------------------------------------*/
document.getElementById('year').textContent = new Date().getFullYear();
