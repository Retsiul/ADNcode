AOS.init();

const dataDoEvento = new Date('Dec 03, 2025 19:00:00');
const timestampDoEvento = dataDoEvento.getTime();

const contaASHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timestampDoEvento - timeStampAtual;
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;
    const diaAteOEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteEvento % horasEmMs) / minEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteEvento % minEmMs) / 1000);
    document.getElementById('dia').innerHTML = `${diaAteOEvento}
    <br/><p class="hero__contador__text">Dias</p>`;
    document.getElementById('hora').innerHTML = `${horasAteOEvento}
    <br/><p class="hero__contador__text">Horas</p>`;
    document.getElementById('minutos').innerHTML = ` ${minutosAteOEvento}
    <br/><p class="hero__contador__text">Minutos</p>`;
    document.getElementById('segundos').innerHTML = `${segundosAteOEvento}
     <br/><p class="hero__contador__text">Segundos</p>`;





    if (diaAteOEvento < 0) {
        clearInterval(contaASHoras);
        const dia = document.getElementById('dia');
        dia.innerHTML = "Estamos em funcionamento!";
       dia.style.width='100%';
        document.getElementById('hora').style.display = 'none';
        document.getElementById('minutos').style.display = 'none';
        document.getElementById('segundos').style.display = 'none';
        document.querySelector('.hero__text').style. visibility='hidden';
    }

}, 1000)