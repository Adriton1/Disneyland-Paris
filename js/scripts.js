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
            menuItem[i].classList.add("nav-link"); 
            menuItem[i].classList.add("active");
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








      const letra = document.getElementsByClassName("letra")
      const navbarLeft = document.getElementsByClassName("recuperarLeftNav")
      const ini = document.getElementById("ini")
      const atracc = document.getElementById("atracc")
      const post = document.getElementById("post")
      const borde = document.getElementsByClassName("recuperarBorde")
      const menuRapido = document.getElementsByClassName("recuperarMenu")
  
      var bordeLen = 5;
      var margenLength = 1;
      var navbarLeftLength = 1;
      var menuRapidoLength = 1;

    const margen = document.getElementsByClassName("recuperar")
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

    document.querySelector("#eliminar").addEventListener("click", () => {
        document.styleSheets[0].disabled = true;
        document.body.removeAttribute("class");
        for (var i = 0; i< margenLength;i++){
            margen[i].classList.remove("sb-topnav");
            margen[i].classList.remove("navbar"); 
            margen[i].classList.remove("navbar-expand"); 
            margen[i].classList.remove("navbar-dark"); 
            margen[i].classList.remove("bg-dark"); 
            margen[i].classList.remove("margenAbierto"); 
            margen[i].classList.remove("prueba");  
        }
        for (var i = 0; i< navbarLeftLength;i++){
            navbarLeft[i].classList.remove("sb-sidenav");
            navbarLeft[i].classList.remove("accordion");
            navbarLeft[i].classList.remove("sb-sidenav-dark");
            navbarLeft[i].classList.remove("sidenavAccordion");
        }
        ini.classList.remove('inicio');
        atracc.classList.remove('atraccion');
        post.classList.remove('postal');
        for(var i =0; i< bordeLen; i++){
            borde[i].classList.remove('borde');   
        }
        for(var i =0; i< menuRapidoLength; i++){
            menuRapido[i].classList.remove("bg-light");
        }
    });

    
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
            for (var i = 0; i< margenLength;i++){
                margen[i].classList.remove("sb-topnav");
                margen[i].classList.remove("navbar"); 
                margen[i].classList.remove("navbar-expand"); 
                margen[i].classList.remove("navbar-dark"); 
                margen[i].classList.remove("bg-dark"); 
                margen[i].classList.remove("margenAbierto"); 
                margen[i].classList.remove("prueba");  
            }
            for (var i = 0; i< navbarLeftLength;i++){
                navbarLeft[i].classList.remove("sb-sidenav");
                navbarLeft[i].classList.remove("accordion");
                navbarLeft[i].classList.remove("sb-sidenav-dark");
                navbarLeft[i].classList.remove("sidenavAccordion");
            }
            ini.classList.remove('inicio');
            atracc.classList.remove('atraccion');
            post.classList.remove('postal');
            for(var i =0; i< bordeLen; i++){
                borde[i].classList.remove('borde');   
            }
            for(var i =0; i< menuRapidoLength; i++){
                menuRapido[i].classList.remove("bg-light");
            }
        }

        if (key.keyCode == "82"){
            document.body.classList.add("sb-nav-fixed");
            for (var i = 0; i< margenLength;i++){
                margen[i].classList.add("sb-topnav");
                margen[i].classList.add("navbar"); 
                margen[i].classList.add("navbar-expand"); 
                margen[i].classList.add("navbar-dark"); 
                margen[i].classList.add("bg-dark"); 
                margen[i].classList.add("margenAbierto"); 
                margen[i].classList.add("prueba"); 
            }
            for (var i = 0; i< navbarLeftLength;i++){
                navbarLeft[i].classList.add("sb-sidenav");
                navbarLeft[i].classList.add("accordion");
                navbarLeft[i].classList.add("sb-sidenav-dark");
                navbarLeft[i].classList.add("sidenavAccordion");
            }
            ini.classList.add('inicio');
            atracc.classList.add('atraccion');
            post.classList.add('postal');
            for(var i =0; i< bordeLen; i++){
                borde[i].classList.add('borde');
            }
            for(var i =0; i< menuRapidoLength; i++){
                menuRapido[i].classList.add("bg-light");
            }
        }
    })

});
