$(document).ready(function() {
    // Menu Abrir/Fechar
    $("#menu-btn").click(function() {
        $("nav").addClass("open-menu");
    });
    $("#close-btn").click(function() {
        $("nav").removeClass("open-menu")
    });
    // Accordion
    $("article#menu-sub").click(function(){
        $(this).next("ul").toggle()
        $(this ).next(".close-icon-top").toggleClass("dropdown-icon");
    });
});