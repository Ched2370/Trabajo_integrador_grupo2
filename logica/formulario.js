const btn = document.getElementById('btnFormulario');
btn.addEventListener('click', validar);
const thead= document.getElementById('thead');
const tbody= document.getElementById('tbody');
function validar() {
    try {
        const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+$/;
        const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const patronConsulta = /^[a-zA-Z0-9\s.-_]+$/;
        const apellido = document.getElementById('apellido').value;
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const textarea = document.getElementById('textarea').value;

        if (apellido && nombre && email && textarea &&
            patron.test(apellido) && patron.test(nombre) &&
            patronEmail.test(email) && patronConsulta.test(textarea)) {
            let cabeceraDatos=["Apellido", "Nombre", "Email", "Mensaje"]
            for(let i = 0; i< cabeceraDatos.length; i++){
            let cabecera= document.createElement('th');
            cabecera.textContent=cabeceraDatos[i];
            thead.appendChild(cabecera);
            
            }
          let datos=[apellido, nombre, email, textarea];
          for(let i = 0; i<datos.length;i++){
            let fila= document.createElement('td');
            fila.textContent=datos[i];
            tbody.appendChild(fila);
           
          }
            
            console.log('Paso');
           
        } else {
            console.log('No paso');
        }
    } catch (err) {
        alert('¡Ha ocurrido un error!' + err.message);
    }



}
