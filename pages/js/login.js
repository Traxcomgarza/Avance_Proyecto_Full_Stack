const mensajeError = document.getElementById.getElementByclassName("error")[0]
document.getElementById("logiin-form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const user =e.target.children.user.value;
    const password =e.target.children.password.value;
    const res = await fetch("http://localhost:4000/api/lohin",{
        method:"POST",
        header:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            user,password
        })
    });
    if(res.ok)return mensajeError.classList,toggle("escondido",false)
    const realson = await res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;

    }    
})
