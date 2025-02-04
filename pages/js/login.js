document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const correo = document.getElementById('usuario').value;
        const contraseña = document.getElementById('password').value;
        
        const response = await fetch('/auth/login', {  // Cambia aquí la ruta a /auth/login
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, contraseña })
        });
        
        const data = await response.json();
        
        if (response.status === 200) {
            alert('Inicio de sesión exitoso');
            // Redireccionar a la página principal o de usuario
        } else {
            alert(`Error: ${data.message}`);
        }
    });
});
