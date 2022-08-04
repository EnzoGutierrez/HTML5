var mivideo, reproducir, barra, progreso, maximo;

maximo = 600;

function Comenzar(){
    mivideo = document.getElementById("mivideo");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando, false);
    progreso.addEventListener("click", adelantando, false);
}

function clicando(){
    if ((mivideo.paused == false) && (mivideo.ended == false)){
        
        mivideo.pause();
        reproducir.innerHTML="Play";
    }

    else{
        mivideo.play();
        reproducir.innerHTML="Pause";
        
        bucle=setInterval(estado, 30)
    }

}

function estado(){
    if(mivideo.ended == false){
        var total = parseInt(mivideo.currentTime*maximo/mivideo.duration);

        progreso.style.width = total+"px";
    }
}

window.addEventListener("load", Comenzar, false);