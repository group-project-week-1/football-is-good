function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;

  axios({
      url: 'http://localhost:3000/login/google',
      method: 'post',
      data: {
        id_token
      }
    })
    .then(({
      data
    }) => {
      console.log(data);
    })
    .catch(err => console.log(err))
}

function register() {
  event.preventDefault()
  $('#form-login').hide()
  $('#form-register').show()

  $('#new-user-form').submit(function() {
    event.preventDefault();
    console.log($('#fullName').val())
    axios({
      url: 'http://localhost:3000/register/signup',
      method: 'post',
      data: {
        fullName: $('#fullName').val(),
        email: $('#email').val(),
        password: $('#passeord').val()
      }
    })
   
  });

}

function login() {
  $('#form-login').show()
  $('#form-register').hide()
  event.preventDefault()
}

$(document).ready(function () {
  login()
})