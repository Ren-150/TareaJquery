$(document).ready(function () {

    //ejemplo 1: Cambiando colores a los headers:

    $('#cambiartema').click(function () {
        $('#navbar').css('background-color', 'green');
        $('#thead').css('background-color', 'yellow');
    });

    //ejemplo 2: Mostrar imagen:

    $('#MImagen').click(function () {
        $('#img1').show("slow");
    });

    //ejemplo 3: Ocultar imagen:

    $('#HImagen').click(function () {
        $('#img1').hide("slow");
    });

    //ejemplo 4: Cambiar formato de los labels

    $('#formLabels').click(function(){
        $('label').toggleClass('formatolabel');
    });

    //ejemplo 5: Mostrar imagen 2:

    $('#MImagen2').click(function () {
        $('#img2').show("fast");
    });

    //ejemplo 6: Ocultar imagen 2:

    $('#HImagen2').click(function () {
        $('#img2').hide("fast");
    });


    //ejemplo 7: Limpiar formulario

    $('#Limpiar1').click(function () {
        $('#prod').val('');
        $('#cant').val('');
        $('#precio').val('');
    });

    //ejemplo 8: Calcular Monto
    $('#calcularmont').click(function () {
        var prod = $('#prod').val();
        var precio = $('#precio').val();
        var cant = $('#cant').val();
        var resultado = cant * precio;
        $('#desc').text(prod);
        $('#res').text(resultado);
    });

    //ejemplo 9: Limpiar Monto
    $('#Limpiar2').click(function () {
        $('#desc').text('');
        $('#res').text('0');
    });

});