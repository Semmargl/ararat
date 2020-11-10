const loggedIn = localStorage.getItem('loggedIn');

global.state = {
  loggedIn: loggedIn !== null && loggedIn
};

global.signIn = (e) => {
  console.log(e);
  e.preventDefault();
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