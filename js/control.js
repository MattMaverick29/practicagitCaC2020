const user = document.getElementById('user');
const pass = document.getElementById('pass');
const error = document.getElementById('error');
const boton = document.getElementById('boton');
const form = document.getElementById('form');

function changePage() {
    window.location.href = 'inicio.html';
}

form.addEventListener("submit", e => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!regexEmail.test(user.value)) {
        document.querySelector('#error').style.color = '#fc5c65';
        error.innerHTML = 'Usuario no válido';
    } else {
        error.innerHTML = '';
        if (pass.value == '' || pass.value.length < 6) {
            error.innerHTML = 'Contraseña no válida';
        } else {
            error.innerHTML = 'Bienvenido...';
            document.querySelector('#error').style.color = 'white';
            setInterval(changePage, 1200);
        }
    }

})