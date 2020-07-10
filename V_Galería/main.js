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

if(document.getElementById("btnModal")){
    var modal = document.getElementById("tvesModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}

