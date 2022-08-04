var miaudio, Play, barra, progreso, maximo;

maximo = 600;

function Comenzar(){
    miaudio = document.getElementById("miaudio");
    Play = document.getElementById("Play");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    Play.addEventListener("click", clicando, false);
    barra.addEventListener("click", adelantando, false);
}

function clicando(){
    if ((miaudio.paused == false) && (miaudio.ended == false)){
        
        miaudio.pause();
        Play.innerHTML="Play";
    }

    else{
        miaudio.play();
        Play.innerHTML="Pause";
        
        bucle=setInterval(estado, 30)
    }

}

function estado(){
    if(miaudio.ended == false){
        var total = parseInt(miaudio.currentTime*maximo/miaudio.duration);

        progreso.style.width = total+"px";
    }
}

function adelantando(posicion){
    if ((miaudio.paused ==false) && (miaudio.ended == false)){
        var ratonX = posicion.pageX-barra.offsetLeft;
        var nuevoTiempo = ratonX*miaudio.duration/maximo;
        miaudio.currentTime = nuevoTiempo;
        progreso.style.width = ratonX+"px";
    }
}

window.addEventListener("load", Comenzar, false);