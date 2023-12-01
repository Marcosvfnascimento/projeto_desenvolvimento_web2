document.addEventListener('DOMContentLoaded', function () {
    // Função para cadastrar um novo item
    function cadastrarItem(nome, descricao) {
        // Verifica se os campos obrigatórios estão preenchidos
        if (!nome || !descricao) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Recupera os itens existentes do localStorage (se houver)
        let itensCadastrados = JSON.parse(localStorage.getItem('itens')) || [];

        // Adiciona o novo item
        itensCadastrados.push({ nome, descricao });

        // Atualiza o localStorage
        localStorage.setItem('itens', JSON.stringify(itensCadastrados));

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('descricao').value = '';

        // Exibe os itens na tela de listagem
        exibirItens();
    }

    // Função para exibir os itens cadastrados na tela de listagem
    function exibirItens() {
        let lista = document.getElementById('lista');
        lista.innerHTML = ''; // Limpa a lista antes de exibir os itens

        // Recupera os itens do localStorage
        let itensCadastrados = JSON.parse(localStorage.getItem('itens')) || [];

        // Exibe cada item na lista
        itensCadastrados.forEach(item => {
            let listItem = document.createElement('li');
            listItem.textContent = `Nome: ${item.nome}, Descrição: ${item.descricao}`;
            lista.appendChild(listItem);
        });
    }

    // Adiciona um evento de clique ao botão de cadastrar
    document.getElementById('cadastrarBtn').addEventListener('click', function () {
        // Recupera os valores dos campos
        let nome = document.getElementById('nome').value;
        let descricao = document.getElementById('descricao').value;

        // Chama a função para cadastrar o item
        cadastrarItem(nome, descricao);
    });

    // Exibe os itens ao carregar a página
    exibirItens();
});