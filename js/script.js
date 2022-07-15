$(document).ready(function() {
    // Menu Abrir
    $("#menu-btn").click(function() {
        $("nav").css({"transition": "2s ease all", "margin-top": "0"});
    });
    $("#close-btn").click(function() {
        $("nav").css({"transition": "2s ease all", "margin-top": "-220%"});
    });
    // Dropdown - Soluções
    $("#solucoes").click(function() {
        $("#dropdown-solucoes").toggle("fast");
    });
    // Dropdown - Treinamentos
    $("#treinamentos").click(function() {
        $("#dropdown-treinamentos").toggle("fast");
    });
});