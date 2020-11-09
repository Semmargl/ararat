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