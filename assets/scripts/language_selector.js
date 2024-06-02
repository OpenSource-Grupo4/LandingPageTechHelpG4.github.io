document.addEventListener('DOMContentLoaded', function() {
    //Cambiar idioma
    const switchInput = document.getElementById('language-switch');
    if (switchInput) {
        switchInput.addEventListener('click', function() {
            if (switchInput.checked) {
                window.location.href = 'index.html';
            } else {
                window.location.href = 'index_en.html';
            }
        });
    }

    /*Dark Mode Button*/
    const darkModeButton = document.getElementById('dark-mode-button');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', function () {
            const body = document.body;
            body.classList.toggle('dark-mode');
        });
    }

    // Desactiva el modo oscuro al cargar la página
    const body = document.body;
    body.classList.remove('dark-mode');

    /*Navbar*/
    var navbar = document.querySelector('header');
    var benefitsSection = document.querySelector('#precios-techsos');

    if (navbar && benefitsSection) {
        window.addEventListener('scroll', function() {
            var offset = benefitsSection.offsetTop + benefitsSection.offsetHeight + 100;
            var windowHeight = window.innerHeight;
            var scrollPosition = window.scrollY || window.pageYOffset;

            if (scrollPosition >= offset - windowHeight) {
                navbar.style.opacity = '0';
            } else {
                navbar.style.opacity = '1';
            }
        });
    }
    
});