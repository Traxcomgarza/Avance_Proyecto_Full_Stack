document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    document.cookie ='jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = "/"
  })


function cerrarSesion() {
  alert("Sesión cerrada.");
  
}


function mostrarFormulario() {
  const formulario = document.getElementById('formulario');
  if (formulario.style.display === 'none') {
      formulario.style.display = 'block'; 
  } else {
      formulario.style.display = 'none'; 
  }
}


function agregarUsuario() {
  
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;
  const rol = document.getElementById('rol').value;
  const cursos = document.getElementById('cursos').value;


  if (usuario || contraseña || rol ||cursos) {
      const nuevaFila = document.createElement('tr');
      const celdaUsuario = document.createElement('td');
      celdaUsuario.textContent = usuario;
      const celdaContraseña = document.createElement('td');
      celdaContraseña.textContent = contraseña;
      const celdaRol = document.createElement('td');
      celdaRol.textContent = rol;
      const celdaCursos = document.createElement('td');
      celdaCursos.textContent = cursos;
      const celdaAcciones = document.createElement('td');
      celdaAcciones.innerHTML = `
          <button onclick="editarUsuario(this)">Editar</button>
          <button onclick="eliminarUsuario(this)">Eliminar</button>
      `;


      nuevaFila.appendChild(celdaUsuario);
      nuevaFila.appendChild(celdaContraseña);
      nuevaFila.appendChild(celdaRol);
      nuevaFila.appendChild(celdaCursos);
      nuevaFila.appendChild(celdaAcciones);


      document.querySelector('#tablaUsuarios tbody').appendChild(nuevaFila);


      document.getElementById('formUsuario').reset();

      document.getElementById('formulario').style.display = 'none';
  } else {
      alert("Por favor, completa todos los campos.");
  }
}


function editarUsuario(button) {
  const fila = button.parentElement.parentElement;
  const celdas = fila.getElementsByTagName('td');


  document.getElementById('usuario').value = celdas[0].textContent;
  document.getElementById('contraseña').value = celdas[1].textContent;
  document.getElementById('rol').value = celdas[2].textContent;
  document.getElementById('cursos').value = celdas[3].textContent;


  fila.remove();

  
  mostrarFormulario();
}


function eliminarUsuario(button) {
  const fila = button.parentElement.parentElement;
  fila.remove();
}


function buscarUsuarios() {
  const busqueda = document.getElementById('buscador').value.toLowerCase(); 
  const filas = document.querySelectorAll('#tablaUsuarios tbody tr'); 

  filas.forEach(fila => {
      const celdas = fila.getElementsByTagName('td'); 
      let encontrado = false;


      for (let i = 0; i < celdas.length - 1; i++) { 
          if (celdas[i].textContent.toLowerCase().includes(busqueda)) {
              encontrado = true;
              break; 
          }
      }


      if (encontrado) {
          fila.style.display = ''; 
      } else {
          fila.style.display = 'none'; 
      }
  });
}
