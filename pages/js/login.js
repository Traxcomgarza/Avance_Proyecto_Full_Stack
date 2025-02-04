/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const correo = document.getElementById('usuario').value;
        const contraseña = document.getElementById('password').value;
        
        const response = await fetch('/auth/login', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, contraseña })
        });
        
        const data = await response.json();
        
        if (response.status === 200) {
            alert('Inicio de sesión exitoso');
    
        } else {
            alert(`Error: ${data.message}`);
        }
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        let users = JSON.parse(localStorage.getItem('users')) || {};
        
        if (users[username] === password) {
            alert('Login exitoso');
            window.location.href = 'admin.html'; // Redirige a la página de administración
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
