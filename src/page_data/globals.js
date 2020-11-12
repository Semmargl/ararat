const loggedIn = localStorage.getItem('loggedIn');

global.state = {
  loggedIn: loggedIn !== null && loggedIn === '1'
};

global.signIn = (e, el) => {
  e.preventDefault();
  const form = el.closest('form');
  const errors = form.querySelectorAll(':invalid');

  if (errors.length) {
    Array.from(errors).map(inp => {
      if (inp.getAttribute('type') === 'checkbox') inp = inp.parentNode;
      inp.classList.add('error');
      inp.onfocus = function () { this.classList.remove('error') }
    });
    return false;
  }

  state.loggedIn = true;
  localStorage.setItem('loggedIn', 1);
  window.location.reload();
};

global.signOut = (e) => {
  e.preventDefault();
  state.loggedIn = false;
  localStorage.removeItem('loggedIn');
  window.location.reload();
};

global.isLoggedIn = () => {
  return state.loggedIn;
};

global.toggleMobileNav = (e, _this) => {
  e.preventDefault();
  _this.classList.toggle('active');
  $('.section-header-sidenav').toggleClass('active');
};

global.toggleSearch = (e, _this) => {
  if (window.innerWidth <= 768) {
    _this.closest('.section-navbar_top_search').classList.toggle('active')
  }
}