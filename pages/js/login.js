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
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Verifica si el usuario existe y si la contraseña es correcta
    if (users[username] && users[username] === password) {
        alert('Inicio de sesión exitoso. Redirigiendo a la página de administración.');
        
        window.location.href = '/admin/admin.html';
    } else {
        alert('Bienvenid@');
        window.location.href = '/admin/admin.html';
    }
});