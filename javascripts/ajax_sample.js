$(function(){
    let numero = 0;
    let dato = [];
    const button = $("#btn");
    const elementTitle = $("#title");
    const elementContent = $("#content");
    const elementInfram = $("#video");

    function pintarElementos() {
        const objectData = dato[numero];
        elementTitle.html(objectData.title);
        elementContent.html(objectData.content);
        elementInfram.attr("src", objectData.url);
    }
    
    function agregarVideo(){
        return $.ajax("ajax.json", {
            type: "GET",
        });
    };

    function cargarVideo(){
        button.on("click", function(){
            if (dato.length == 0) {
                agregarVideo().then((responseData) =>{
                    dato = responseData;
                    pintarElementos();
                    numero++;
                });
            }
            else{
                pintarElementos();
                numero == 2 ? numero = 0: numero++;
            }
        });
    }
    cargarVideo();
});