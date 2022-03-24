const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    console.log(`${hr}:${min}:${seg}`);

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let year = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia}/${mes}/${year}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    /*Esto es opcional, ya que lo que hace es agregar una vez
    sí y una vez no un marco pequeño al contenedor del reloj con
    la propiedad de toggle*/
    //document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => {
    if (hora < 10) {
        hora = "0" + hora;

    }
    return hora;
}

setInterval(mostrarReloj, 1000);