$(document).ready(function () {
    $('.enlaces').click(function () 
    {
        var valor=$(this).attr('data.nombre');
        if(valor == 'Todos')
        {
            $('.filtro').show('1000');
        }
        else {
            $('.filtro').not('.'+valor).hide('1000');
            $ ('.filtro').filter('.'+valor).show('1000');
        }

        $(('ulContent .enlaces').click(function () {
            $(this).addClass('activo');
            
        }));
        
    });
});

