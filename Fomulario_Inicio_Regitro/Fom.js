const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const error = document.getElementById("error");
    error.innerText = "";

    if (formData.get("password") !== formData.get("confirm-password")) {
        error.innerText = "Las contraseñas no coinciden";
        return;
    }

    formData.forEach((value, key) => {
        console.log(key, value);
    });

});

const formDeInicioSesion = document.getElementById("formDeInicioSesion");
formDeInicioSesion.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const error = document.getElementById("error");
    error.innerText = "";
    formData.forEach((value, key) => {
        console.log(key, value);
    });
})