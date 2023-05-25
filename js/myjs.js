
    $(document).ready(function () {

    var elemento = document.querySelectorAll("p");
    var elemento1 = document.querySelectorAll("h1");
    var elemento2 = document.querySelectorAll("div");


    aparecer();

    for (var index = 0; elemento2.length; index++) {
    elemento2[index].addEventListener("mouseover",canviar,false);
    elemento2[index].addEventListener("mouseout",leernormal,false);

}

    for (var index1 = 0; elemento1.length; index1++) {
    elemento1[index].addEventListener("mouseover",canviar,false);
    elemento1[index].addEventListener("mouseout",leernormal,false);

}

    for (var index2 = 0; elemento.length; index2++) {
    elemento[index].addEventListener("mouseover",canviar,false);
    elemento[index].addEventListener("mouseout",leernormal,false);
}

});

    function canviar(e) {
    var idSecionado;
    if (e.target === descripcion || e.target === descripCompleta || e.target === h1){
    idSecionado = "#descripcion";
}else if (e.target === habilidades || e.target === habiliTotales || e.target === h2){
    idSecionado = "#habilidades";
}
    $(idSecionado).css({"background-color": "#000000", "color" : "#ffffff","box-shadow": "5px 5px 15px gray"});
}

    function leernormal(e) {
    var idSecionado;
    if (e.target === descripcion || e.target === descripCompleta || e.target === h1){
    idSecionado = "#descripcion";
}else if (e.target === habilidades || e.target === habiliTotales || e.target === h2){
    idSecionado = "#habilidades";
}
    $(idSecionado).css({"background-color": "#ffffff", "color" : "#000000","box-shadow": ""});
}

    function aparecer() {
    $("#mifoto").hide();
    $("#habilidades").hide();
    $("#descripcion").hide();
    $("#spinner").hide(3000,mifoto());

}

    function mifoto() {
    $("#mifoto").show(3000,hailidadesDescripcion());
}

    function hailidadesDescripcion() {
    $("#habilidades").show(3000);
    $("#descripcion").show(3000);
}
