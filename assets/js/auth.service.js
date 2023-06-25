const form = document.getElementById('log-form');
const boton = document.getElementById("boton");
const email = document.getElementById('floatingInput');
const password = document.getElementById('floatingPassword');
const loginfailed = document.getElementById('login-failed');

function validateUser(users) {

  var usersArray = JSON.parse(users);
  var loginEmail = email.value;
  var loginPassword = password.value;

  var succeslogin = false;
  // if (localStorage.getItem("usuarios").length === 0")
  usersArray.forEach(user => {

    if (user.email.toLowerCase() === loginEmail.toLowerCase() && user.password === loginPassword) {
      localStorage.setItem("usuarioActivo", true);
      localStorage.setItem('usuario', JSON.stringify(user));

      succeslogin = true;
      return succeslogin;
    }

  });

  return succeslogin;
};



function checkLogin() {

  var users = localStorage.getItem("usuarios");

  if (users === null || users.length === 0) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      loginfailed.classList.toggle("d-none");
    });

  } else {

    var succeslogin = validateUser(users);
    

    if (succeslogin) {

      window.location = "./paginaprincipal.html";

    } else {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        loginfailed.classList.toggle("d-none");
      });

    }
  }
};

function hideLoginError() {
  loginfailed.classList.add("d-none");
};

window.addEventListener("load", hideLoginError);

boton.addEventListener("click", checkLogin);

