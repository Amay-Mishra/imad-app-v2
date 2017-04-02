function register() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        console.log('user created');
        alert('Registered Successfully');
        closeNav();
      }
      else if (request.status === 500) {
      console.log(this.responseText);
        alert('Something went wrong');
      }
    }
  };
  var username = document.getElementById('reg-username').value;
  var password = document.getElementById('reg-password').value;
  var email = document.getElementById('reg-email').value;
  request.open('POST','/register',true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({username: username, password: password, email: email}));
};
