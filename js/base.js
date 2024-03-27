window.addEventListener('load', function() {
    positionFooter(); // Llama a la función cuando la página haya cargado completamente
});

function positionFooter() {
    const footer = document.querySelector('footer');
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;
    
    if (bodyHeight < windowHeight) {
        const footerPosition = windowHeight - bodyHeight;
        footer.style.position = 'relative';
        footer.style.top = footerPosition + 'px';
    } else {
        footer.style.position = 'static';
    }
}

window.addEventListener('resize', positionFooter); // Llama a la función cuando se redimensiona la ventana


// document.getElementById('language-select').addEventListener('change', function() {
//     const lang = this.value;
//     fetch(`strings-${lang}.js`)
//         .then(response => response.text())
//         .then(script => {
//             eval(script); // Ejecuta el script para cargar las cadenas de texto
//             updateContent(); // Llama a una función para actualizar el contenido
//         });
// });

// function updateContent() {
//     document.getElementById('welcome-message').textContent = strings.welcome;
//     document.getElementById('about-link').textContent = strings.about;
//     document.getElementById('contact-link').textContent = strings.contact;
//     // Actualiza más elementos del DOM según las cadenas de texto
// }