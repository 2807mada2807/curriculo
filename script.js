function openTab(evt, tabName) {
    // Declarar variables
    var i, tabcontent, tablinks;

    // Obtener todos los elementos con la clase "tabcontent" y ocultarlos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Obtener todos los elementos con la clase "tablink" y quitarles la clase "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la pestaña actual y añadir la clase "active" al botón que abrió la pestaña
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Por defecto, abrir la primera pestaña
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click();
});