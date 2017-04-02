function login() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        console.log('user logged in');
        alert('Login Successfully');
        closeNav();
      }
      else if (request.status === 403) {
        alert('Username or password incorrect');
      }
      else if (request.status === 500) {
        alert('Something went wrong');
      }
    }
  };
  var username = document.getElementById('log-username').value;
  var password = document.getElementById('log-password').value;
  request.open('POST','/login',true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({username: username, password: password}));
};
