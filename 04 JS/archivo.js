function ejecuta(){
    //document.querySelector(".importante").onclick=saludo;
    var elementos = document.querySelectorAll("#principal p");
    for(var i=0;i<elementos.length;i++){
        elementos[i].onclick = saludo;
    }
}

function saludo(){
    alert("hola");
}

window.onload = ejecuta;