/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const user = document.getElementById('user').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const response = await fetch('./auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, email, password })
        });
        
        const data = await response.json();
        
        if (response.status === 201) {
            alert('Registro exitoso');
            // Redireccionar a la página de inicio de sesión
            window.location.href = 'Login.html';
        } else {
            alert(`Error: ${data.message}`);
        }
    });
});*/

// Crear usuario predeterminado si no existe
// Crear usuario predeterminado si no existe
// Diccionario para almacenar los usuarios


let users = {};

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    // Verifica si el usuario ya existe
    if (users[username]) {
        alert('El usuario ya existe. Por favor, elige otro nombre de usuario.');
    } else {
        // Almacena el nuevo usuario en el diccionario
        users[username] = password;
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        // Redirige al usuario a la página de login
        window.location.href = 'login.html';
    }
});