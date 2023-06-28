const form = document.getElementById('log-form');
const boton = document.getElementById("boton");
const email = document.getElementById('floatingInput');
const password = document.getElementById('floatingPassword');
const loginfailed = document.getElementById('login-failed');
const mainPage = document.getElementById("redirect");


function validateUser() {
  var users = localStorage.getItem("usuarios");

  var loginEmail = email.value;
  var loginPassword = password.value;

  var succeslogin = false;

  if (users === null || users.length === 0) {
    return succeslogin;
  }

  var usersArray = JSON.parse(users);

  usersArray.forEach(user => {

    if (user.email.toLowerCase() === loginEmail.toLowerCase() && user.password === loginPassword) {
      localStorage.setItem("usuarioActivo", true);
      localStorage.setItem('usuario', JSON.stringify(user));
      succeslogin = true;
    }

  });

  return succeslogin;
};



async function checkLogin() {

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  var succeslogin = validateUser();

  if (succeslogin) {

    // submitFormDataToServer().then(() => {
      window.location.href = "./pagprincipal.html";
    // });

  } else {
    loginfailed.classList.remove("d-none");
  }

};

function hideLoginError() {
  loginfailed.classList.add("d-none");
};


window.addEventListener("load", hideLoginError);
boton.addEventListener("click", checkLogin);

// submitFormDataToServer(){ //Funcion pendiente para enviar el submit al servidor 
// return new Promise((resolve, reject) => {
//    Implementar logica para mandar el email y contraseña al servidor
      
//     Una vez resuelto el envio de datos al servidor, resolver la promesa
//     resolve();
      
//     Si existe un error en el submit, rechazar la promesa
//     reject();
//   });
// }}