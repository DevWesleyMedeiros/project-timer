const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
const btnPause = document.getElementById('pause')

const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const day = document.getElementById('days');

let cronometroDias = 0;
let cronometroHoras = 0;
let cronometroMinutos = 0;
let cronometroSegundos = 0;
let cronometroLigado;
let isPaused = false // Esta rodando

function iniciarCronometro() {
    btnStart.style.display = 'none'
    btnPause.style.display = ' block'
    cronometroLigado = setInterval(()=>{
        if (!isPaused){ // Não esta pausado, ou seja, está rodando
            cronometroSegundos++;
        if (cronometroSegundos > 59){
            cronometroMinutos++
            cronometroSegundos = 0;
        if (cronometroMinutos > 59){
            cronometroHoras++
            cronometroMinutos = 0
        }
        if (cronometroHoras > 23){
            cronometroDias++
            cronometroHoras = 0
           }
        }
        seconds.textContent = cronometroSegundos.toString().padStart(2, '0');
        minutes.textContent = cronometroMinutos.toString().padStart(2, '0')
        hours.textContent = cronometroHoras.toString().padStart(2, '0');
        day.textContent = cronometroDias.toString().padStart(2, '0');
        
    }
    }, 1000);
}

function pausarCronometro() {
    // isPaused = false -- esta rodando
    // !isPaused -- esta pausado 

    isPaused = !isPaused;
    btnPause.textContent = isPaused ? 'Continuar' : 'Pausar';
    if(btnPause.textContent == 'Continuar'){
        btnPause.style.backgroundColor = 'green'
    }else{
        btnPause.style.backgroundColor = 'red'
    }
}

function resetarCronometro(){
    clearInterval(cronometroLigado);
    cronometroDias = 0;
    cronometroHoras = 0;
    cronometroMinutos = 0;
    cronometroSegundos = 0;
    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';
    day.textContent = '00';
    btnPause.style.display = 'none'
    btnStart.style.display = 'block'
    btnStart.textContent = 'Começar'
}

btnStart.addEventListener('click', iniciarCronometro);
btnReset.addEventListener('click', resetarCronometro);
btnPause.addEventListener('click', pausarCronometro)
