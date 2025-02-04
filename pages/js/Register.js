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
 
let users = JSON.parse(localStorage.getItem('users')) || {};
if (!users['admin']) {
    users['admin'] = '1234';
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso');
        window.location.href = '/admin/admin.html'; // Redirige a la página de login
    } else {
        alert('Por favor, complete todos los campos');
    }
});
