(function (html) {

  // Preloader
  function dkPreloader() {
    html.classList.add('preload');

    const preloader = document.querySelector(".preloader");

    window.addEventListener("load", function () {
      html.classList.remove('preload');
      html.classList.add('loaded');
      
      preloader.addEventListener("transitionend", function () {
        preloader.style.display = "none";

        // AOS
        // https://github.com/michalsnik/aos
        AOS.init({
          duration: 700,
          offset: 150,
          once: true,
        });
      });
    });
  }

  // Navigation
  function dkNavigation() {
    const navLink = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarToggler = document.querySelector(".navbar-toggler");
    navLink.forEach(function (link) {
      link.addEventListener("click", function (e) {
        navbarCollapse.classList.remove("show");
        navbarToggler.classList.add("collapsed");
        navbarToggler.setAttribute("aria-expanded", "false");
      });
    });

    const pxShowScrolled = 100;
    const navbar = document.querySelector('.navbar');

    if (window.scrollY >= pxShowScrolled) navbar.classList.add('scrolled');

    window.onscroll = function () {
        if (window.scrollY >= pxShowScrolled) {
            navbar.classList.add('scrolled');
        }
        else {
            navbar.classList.remove('scrolled');
        }
    };
  }

  // MoveTo
  // https://github.com/hsnaydd/moveTo
  function dkMoveTo() {
    const easeFunctions = {
      easeInOutCubic: function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      },
    };

    const triggers = document.querySelectorAll(".smoothscroll");

    const moveTo = new MoveTo(
      {
        tolerance: 80,
        duration: 1000,
        easing: "easeInOutCubic",
        container: window,
      },
      easeFunctions
    );

    triggers.forEach(function (trigger) {
      moveTo.registerTrigger(trigger);
    });
  }

  // Swiper
  // https://swiperjs.com
  function dkTestimonialsSwiper() {
    const testimonialsSwiper = new Swiper('.testimonials .swiper', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
  }

  // Swiper
  // https://swiperjs.com
  function dkPortfolioSwiper() {
    const portfolioSwiper = new Swiper('.portfolio .swiper', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
                slidesPerView: 2,
            },
          992: {
              slidesPerView: 3,
          },
        }
    });
  }

  // GLightbox
  function dkGlightbox() {
    // https://github.com/biati-digital/glightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        zoomable: false,
        touchNavigation: true,
        loop: false,
        autoplayVideos: true,
    });
  }

  function dkForm() {
    const formElem = document.getElementById('form');
    const alertSuccess = document.querySelector('.alert-success');
    const alertDanger = document.querySelector('.alert-danger');

    formElem.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('mail.php', {
            method: 'POST',
            body: formData,
        }).then(function() {
            alertSuccess.style.display = 'block';
            setTimeout(() => (alertSuccess.style.display = 'none'), 4000);
            formElem.reset();
        }).catch(function() {
            alertDanger.style.display = 'block';
            setTimeout(() => (alertDanger.style.display = 'none'), 4000);
        });
    });
}

  dkPreloader();
  dkNavigation();
  dkMoveTo();
  dkTestimonialsSwiper();
  dkPortfolioSwiper();
  dkGlightbox();
  dkForm();
})(document.documentElement);
