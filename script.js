const form = document.getElementById('cadastro-form');
const mensagemDiv = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Simulando o envio dos dados para o servidor
    console.log('Dados enviados:', nome, email, senha);

    // Exibir mensagem de confirmação
    mensagemDiv.textContent = 'Cadastro concluído com sucesso!';
    mensagemDiv.style.display = 'block';

    // Limpar o formulário após o envio
    form.reset();

    // Redirecionar para a página inicial após 3 segundos
    setTimeout(() => {
        window.location.href = 'index.html'; // Altere para o caminho da sua página inicial
    }, 3000);
});