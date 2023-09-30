function isAuthenticated() {
  const token = localStorage.getItem('isAuthenticated');
  return !token ? false : true;
}

export default isAuthenticated;
