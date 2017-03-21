function translate(){
   var title = document.getElementById("form-signin-heading");
   var email = document.getElementById("inputEmail");
   var password = document.getElementById("inputPassword");
   var remember = document.getElementsByTagName("span")[0];
   var button = document.getElementsByClassName("btn")[0];

   title.innerHTML = "Por favor inicia sesión";
   email.placeholder = "Correo Electrónico";
   password.placeholder = "Contraseña";
   remember.innerHTML = "Recordar datos";
   button.innerHTML = "Iniciar Sesión";
}
translate();


function datosUsuario(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var espacioDatosUsuario = document.getElementById("espacioDatosUsuario");
  var titulo = document.getElementById("tituloFormulario");

  titulo.innerHTML = "Datos del Formulario"
  espacioUsuario.innerHTML = "El correo electrónico ingresado es:" + "<br>" + email + "<br><br>" + "La clave mostrada es:" + "<br>" + password;

}
