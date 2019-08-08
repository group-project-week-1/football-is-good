function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;

  axios({
    url: 'http://localhost:3000/login/google',
    method: 'post',
    data: { id_token }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => console.log(err))
}

function register() {
  event.preventDefault()
  $('#form-login').hide()
  $('#form-register').show()
}

function login(){
  $('#form-login').show()
  $('#form-register').hide()
}

$(document).ready(function () {
  login()
})