const btn = document.getElementById('btnFormulario');
btn.addEventListener('click', validar);

function validar() {
    try {
        patron = /[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+/;
        patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        patronConsulta = /^[a-zA-Z0-9\s.-_]*/;
        const apellido = document.getElementById('apellido');
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const textarea = document.getElementById('textarea');

        if ((apellido && nombre && email && textarea) && (patron.test(apellido) && patron.test(nombre) && patronEmail.test(email) && patronConsulta.test(textarea))) {
            alert('paso');
        }else {
            alert('no paso');
        }
        

    } catch (err) {
        alert('BUUU'  + err.message);
    }
}