const botao = document.querySelector('.btn');
const formulario = document.getElementById('form');
const inputEmail = document.querySelector('input');

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let campoObrigatorioDandoError = "Please provide a valid email"
        if(inputEmail.value === "" || inputEmail.value === '@'){
            inputEmail.classList.add("error");
            botao.nextElementSibling.textContent = campoObrigatorioDandoError; 
        }else {
            inputEmail.classList.add("aceito")
            inputEmail.classList.remove("error");
            botao.nextElementSibling.textContent = ""; 
        }   
});