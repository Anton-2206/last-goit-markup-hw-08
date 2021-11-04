(() => {
  const refs = {
    openmenuBtn: document.querySelector('.menu__open-btn'),
    closemenuBtn: document.querySelector('.menu__close-btn'),
    menu: document.querySelector('.backdrop'),
  };

  refs.openmenuBtn.addEventListener('click', togglemenu);
  refs.closemenuBtn.addEventListener('click', togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();