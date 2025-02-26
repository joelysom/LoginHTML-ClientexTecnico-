// script.js
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const toggleBtn = document.querySelectorAll('.toggle-button');  // Selecionando ambos os botões

// Adicionando eventos de clique nos botões
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    toggleBtn.forEach(btn => btn.classList.add('active')); // Alternando a classe 'active' nos botões
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    toggleBtn.forEach(btn => btn.classList.remove('active')); // Removendo a classe 'active' nos botões
});
