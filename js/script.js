$(document).ready(function() {
    // Menu Abrir
    $("#menu-btn").click(function() {
        $("nav").css({"transition": "2s ease all", "margin-top": "0"});
    });
    // Menu Fechar
    $("#close-btn").click(function() {
        $("nav").css({"transition": "2s ease all", "margin-top": "-100vh"});
    });
    // Dropdown - Soluções
    $("#solucoes").click(function() {
        $("#dropdown-solucoes").toggle("fast");
        $("#solucoes .close-icon-top").toggleClass("dropdown-icon");
    });
    // Dropdown - Treinamentos
    $("#treinamentos").click(function() {
        $("#dropdown-treinamentos").toggle("fast");
        $("#treinamentos .close-icon-top").toggleClass("dropdown-icon");
    });
});