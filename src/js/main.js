let sceneElements = document.querySelectorAll('.parallax');

// generate parallax instances
if (sceneElements) {
  for (let i = 0; i < sceneElements.length; i++) {
    if (sceneElements[i].classList.contains('js-parallax-invert')) {
      new Parallax(sceneElements[i], {
        invertX: false
      });
    } else {
      new Parallax(sceneElements[i]);
    }
  }
}

const swiper = new Swiper('.swiper', {
  speed: 300,
  effect: 'coverflow',
  loop: true,
  grabCursor: false,
  spaceBetween: 330,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 410,
    depth: 180,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.portfolio-slider__btn--next',
    prevEl: '.portfolio-slider__btn--prev',
  },
  breakpoints: {
    768: {
      coverflowEffect: {
        rotate: 0,
        stretch: 410,
        depth: 180,
        modifier: 1,
        slideShadows: false,
      },
    },
  }
});

//Burger-menu//
const burger = document.querySelector('.menu-btn');

burger.addEventListener('click', (e) => {
  e.preventDefault();

  let topWrapper = document.querySelector('.top-wrapper');

  let target = e.currentTarget;
  target.classList.toggle('menu-btn--open');
  topWrapper.classList.toggle('menu-open');
  // document.querySelector('.menu-btn__text').innerHTML='Close'

  body.dataset.scrollY = getBodyScrollTop(); // сохраним значение скролла

  if (!topWrapper.classList.contains('menu-open')) {
    if (existVerticalScroll()) {
      body.classList.remove('body-lock')
      window.scrollTo(0, body.dataset.scrollY);
      body.style.top = null;
    }
  } else {
    if (existVerticalScroll()) {
      body.classList.add('body-lock');
      body.style.top = `-${body.dataset.scrollY}px`;
    }
  }
});

// scroll-hint

let sections =  $('section');
let secondSection = sections.eq(1);

$('.scroll-hint').on('click', function(e) {
  e.preventDefault();

  let top = secondSection.offset().top;

  $("body,html").animate({ scrollTop: top }, 800);
});

