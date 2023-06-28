function ocultarEnCel() {
    var divEliminar = document.getElementById('contenedoor');
    var anchoPantalla = window.innerWidth; 
    
    if (anchoPantalla < 700) { 
      divEliminar.style.display = 'none';
    }  else {
      divEliminar.style.display = 'grid';
    }
  }

  function ocultarEnDesk() {
    var divEliminarCel = document.getElementById('contenedorCel');
    var anchoPantalla = window.innerWidth; 
    
    if (anchoPantalla >= 700) { 
      divEliminarCel.style.display = 'none';
    }  else {
      divEliminarCel.style.display = 'grid';
    }
  }

  document.addEventListener('click', function() {
    window.location.href = 'pagprincipal.html'; 
  });

 

  window.addEventListener('resize', ocultarEnCel);
  window.addEventListener('resize', ocultarEnDesk);

  ocultarEnCel(); 
  ocultarEnDesk();
