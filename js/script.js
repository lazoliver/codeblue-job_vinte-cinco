$(document).ready(function() {
    // Menu Abrir/Fechar
    $("#menu-btn").click(function() {
        $("nav").addClass("open-menu");
    });
    $("#close-btn").click(function() {
        $("nav").removeClass("open-menu")
    });
});