    /* menu-burguer */
    function toggleMenu() {
        var navMobile = document.getElementById("nav-mobile");
        var menuIcon = document.getElementById("menu-mobile").getElementsByTagName("img")[0];
        var header = document.querySelector("header");
        var port = document.querySelector('#portfolio')
    
        if (navMobile.style.display === "block") {
            navMobile.style.display = "none";
            menuIcon.src = "imagens/icon-hamburger.svg";
            header.style.height = "64px";
            port.style.marginTop = "1000px"
            
        } else {
            navMobile.style.display = "block";
            menuIcon.src = "imagens/icon-close.svg";
            header.style.height = "250px";
            port.style.marginTop = "800px"
        }
    }
    