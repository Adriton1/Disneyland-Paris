/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('a');
    const menuLength = menuItem.length;
    const icono = document.querySelector('#icono');

    for(let i = 0; i<menuLength; i++){
        if(menuItem[i].href === currentLocation){
            menuItem[i].classList = "nav-link active"
        icono.className = "navbar-brand ps-3"
        }
    }

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-success" alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Se ha enviado la postal correctamente')
    })
    }

    document.querySelector(".side-panel-toggle").addEventListener("click", () => {
        document.querySelector(".wrapper").classList.toggle("side-panel-open");
      });


    const margen = document.getElementsByClassName("prueba")
    document.querySelector(".side-panel-toggle").addEventListener("click", () => {
    for(var i = 0; i<margen.length; i++){
        if(margen[i].classList.contains('margenAbierto')){
            margen[i].classList.remove('margenAbierto');
            margen[i].classList.add('margenCerrado');
        }
        else{
            margen[i].classList.remove('margenCerrado');
            margen[i].classList.add('margenAbierto');
        }
    }
    });



    const letra = document.getElementsByClassName("letra")
    const navbarLeft = document.getElementsByClassName("sidenavAccordion")
    const ini = document.getElementById("inicio")
    const atracc = document.getElementById("atracciones")
    const post = document.getElementById("postal")
    const borde = document.getElementsByClassName("borde")
    const menuRapido = document.getElementsByClassName("menuRapido")
    document.addEventListener("keydown", function(event){
        var key = event;
        if (key.keyCode == "80") {
            for (var i = 0; i < letra.length; i++){
                if (letra[i].classList.contains('side-panel-open')){
                    letra[i].classList.remove('side-panel-open');
                    margen[i].classList.remove('margenAbierto');
                    margen[i].classList.add('margenCerrado');
                }
                else{
                    letra[i].classList.add('side-panel-open');
                    margen[i].classList.remove('margenCerrado');
                    margen[i].classList.add('margenAbierto');
                }
            }
        }

        if (key.keyCode == "69"){
            document.styleSheets[0].disabled = true;
            document.body.removeAttribute("class");
            for (var i = 0; i< margen.length;i++){
                margen[i].removeAttribute("class");
            }
            for (var i = 0; i< navbarLeft.length;i++){
                navbarLeft[i].removeAttribute("class");
            }
            ini.removeAttribute('id');
            atracc.removeAttribute('id');
            post.removeAttribute('id');
            var bordeLength = borde.length;
            for(var i =0; i< bordeLength; i++){
                borde[0].classList.remove('borde');
            }
            for(var i =0; i< menuRapido.length; i++){
                menuRapido[i].classList.remove("bg-light");
            }
        }
    })

});
