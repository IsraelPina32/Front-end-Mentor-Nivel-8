const botao = document.querySelector('.btn');
const formulario = document.getElementById('form');
const inputEmail = document.querySelector('input');

function validarEmail(email) {
    // Expressão regular para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    
    let campoObrigatorioDandoError = "Please provide a valid email"
        if(inputEmail.value === "" || !validarEmail(inputEmail.value)){
            inputEmail.classList.add("error");
            botao.nextElementSibling.textContent = campoObrigatorioDandoError; 
        }else {
            inputEmail.classList.add("aceito")
            inputEmail.classList.remove("error");
            botao.nextElementSibling.textContent = ""; 
        }   
});