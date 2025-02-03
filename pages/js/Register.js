document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            console.log("Formulario enviado");

            const user = document.getElementById("user").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const res = await fetch("http://localhost:4000/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ user, email, password })
                });

                const data = await res.json();
                console.log(data);

                if (res.ok) {
                    alert("Registro exitoso");
                } else {
                    alert("Error en el registro: " + data.message);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Ocurrió un error, intenta de nuevo.");
            }
        });
    } else {
        console.error("No se encontró el formulario con id 'register-form'");
    }
});
