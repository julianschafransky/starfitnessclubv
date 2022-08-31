
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });
function calcularIMC() {
  var nombre = document.getElementById('nombre').value;
  var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
  var alturaEnMetros = alturaEnCentimetros / 100;
  var pesoEnKilos = parseInt(document.getElementById('peso').value);

  var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
  var clasificacion;
  
  if (imc < 18.5) {
    clasificacion = 'estás muy delgado';
  } else if (imc < 25) {
    clasificacion = 'estás saludable';
  } else {
    clasificacion = 'tienes sobrepeso';
  }
  /* Consejo:
  
  */
  var respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
  alert(respuesta);
}


    

