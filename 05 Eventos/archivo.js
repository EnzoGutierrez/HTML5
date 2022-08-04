var imagen = document.getElementsByTagName("img")[0];

function TipoPinguino(){
    alert("El maquina");
}

function manejaPinguno(){
    for(var i = 0; i<4;i++){
        imagen[i]=document.getElementsByTagName("img")[i];
    }

    imagen[0].addEventListener("mouseover", function(){imagen[0].width=225;imagen[0].height=225;}, false);
    imagen[0].addEventListener("mouseout", function(){imagen[0].width=200;imagen[0].height=200;}, false);
    imagen[0].addEventListener("click", TipoPinguino, false);

    imagen[1].addEventListener("mouseover", function(){imagen[1].width=225;imagen[1].height=225;}, false);
    imagen[1].addEventListener("mouseout", function(){imagen[1].width=200;imagen[1].height=200;}, false);
    imagen[1].addEventListener("click", TipoPinguino, false);

    imagen[2].addEventListener("mouseover", function(){imagen[2].width=225;imagen[2].height=225;}, false);
    imagen[2].addEventListener("mouseout", function(){imagen[2].width=200;imagen[2].height=200;}, false);
    imagen[2].addEventListener("click", TipoPinguino, false);

    imagen[3].addEventListener("mouseover", function(){imagen[3].width=225;imagen[3].height=225;}, false);
    imagen[3].addEventListener("mouseout", function(){imagen[3].width=200;imagen[3].height=200;}, false);
    imagen[3].addEventListener("click", TipoPinguino, false);
}

/*function crecerImagen(){
    imagen.width=225;
    imagen.height=225;
}*/

/*function decrecerImagen(){
    imagen.width=200;
    imagen.height=200;
}*/
//window.onload = manejaPinguno;
window.addEventListener("load",manejaPinguno,false)