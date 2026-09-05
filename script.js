const botaoCadastrar = document.querySelector('button');

botaoCadastrar.addEventListener('click', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nomePeca = document.getElementById('peca').value;
    const quantidadeStr = document.getElementById('qtd').value;

    if (codigo === '' || nomePeca === '' || quantidadeStr === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    let quantidade = parseInt(quantidadeStr);
    const tabelaEstoque = document.getElementById('tabela-estoque');

    const novaLinha = document.createElement('tr');

    const colunaCodigo = document.createElement('td');
    colunaCodigo.textContent = codigo;

    const colunaPeca = document.createElement('td');
    colunaPeca.textContent = nomePeca;

    const colunaQtd = document.createElement('td');
    colunaQtd.textContent = quantidade;

    // Coluna de Ações
    const colunaAcao = document.createElement('td');
    
    // Botão de Dar Baixa
    const botaoBaixa = document.createElement('button');
    botaoBaixa.textContent = 'Dar Baixa (-1)';
    botaoBaixa.className = 'btn-baixa';

    botaoBaixa.addEventListener('click', function() {
        if (quantidade > 1) {
            quantidade -= 1;
            colunaQtd.textContent = quantidade;
        } else {
            novaLinha.remove(); // Remove o item se a quantidade chegar a zero
        }
    });

    // Botão de Remover Completamente
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'btn-remover';

    botaoRemover.addEventListener('click', function() {
        novaLinha.remove();
    });

    // Adiciona os botões na célula de ações
    colunaAcao.appendChild(botaoBaixa);
    colunaAcao.appendChild(botaoRemover);

    // Monta a linha completa
    novaLinha.appendChild(colunaCodigo);
    novaLinha.appendChild(colunaPeca);
    novaLinha.appendChild(colunaQtd);
    novaLinha.appendChild(colunaAcao);

    // Insere na tabela
    tabelaEstoque.appendChild(novaLinha);

    // Limpa o formulário
    document.getElementById('codigo').value = '';
    document.getElementById('peca').value = '';
    document.getElementById('qtd').value = '';
});