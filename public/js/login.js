document.addEventListener("DOMContentLoaded", function() {
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit", function(event) {
      event.preventDefault(); /* evita que el navegador recargue la página o realice la acción de envío al servidor, permitiendo al desarrollador tomar el control total de lo que debe ocurrir cuando se envía el formulario*/
      const formData = new FormData(formLogin);
      const nombreUsuario = formData.get("nombreUsuario");
      const contraseniaUsuario = formData.get("contraseniaUsuario");
  
      const resumenUsuario = `Usuario: ${nombreUsuario}, Contraseña: ${contraseniaUsuario}`;
  
      console.log(resumenUsuario);
    });
  });