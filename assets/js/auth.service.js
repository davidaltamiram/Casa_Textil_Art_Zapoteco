const form = document.getElementById('log-form');
const boton = document.getElementById("boton");
const email = document.getElementById('floatingInput');
const password = document.getElementById('floatingPassword');
const loginfailed = document.getElementById('login-failed');
const mainPage = document.getElementById("redirect");

class Login {
  email;
  password;

  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}


function validateUser(loginrequest) {

  fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'   // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(loginrequest)
  })
    .then(response => {
      if (response.ok) {
        localStorage.setItem("usuario", 1);
        window.location.href = "./pagprincipal.html";
      } else {
        loginfailed.classList.remove("d-none");
      }
    })
    .catch(e => {
      console.log("Conexion fallida " + e);
    })

};

function createlogin() {
  return new Login(email.value,password.value); 
}

async function checkLogin() {

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  var loginrequest = createlogin();
  validateUser(loginrequest);
};

function hideLoginError() {
  loginfailed.classList.add("d-none");
};


window.addEventListener("load", hideLoginError);
boton.addEventListener("click", checkLogin);

