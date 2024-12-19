(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function(e) {
  e.preventDefault();
  this.parentNode.classList.toggle('active');
  this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
  e.stopImmediatePropagation();
  });
});

const navmenulinks = document.querySelectorAll('.navmenu a');
  
function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
  if (!navmenulink.hash) return;
  let section = document.querySelector(navmenulink.hash);
  if (!section) return;
  let position = window.scrollY + 200;
  if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
    document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
    navmenulink.classList.add('active');
  } else {
    navmenulink.classList.remove('active');
  }
  })
}
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);

window.addEventListener('load', function(e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  }
});

})();