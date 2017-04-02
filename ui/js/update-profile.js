function update_profile() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        document.getElementById("alert-box").innerHTML='<a class="panel-close close" data-dismiss="alert">&times</a><i class="fa fa-coffee"></i>Changes saves successfully';
      }
      else if (request.status === 403) {
        alert('Username or password incorrect');
      }
      else if (request.status === 500) {
        alert('Something went wrong');
      }
    }
  };
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var gender = document.getElementById('gender').value;
  var description = document.getElementById('description').value;
  request.open('POST','http://localhost:8080/update-profile',true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({fname: fname, lname: lname, email: email,gender: gender, description: description}));
};
