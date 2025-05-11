let totalGeral;
limpar();

function adicionar () {
    let produtos = document.getElementById('produto');
    let selecionado = produtos.value;

    let quantidade = document.getElementById('quantidade').value;
    const nomeProduto = selecionado.split(' - R$')[0];
    const preco = selecionado.match(/R\$(\d+)/)[1];
    let conta = quantidade * preco;


    let listaProdutos = document.getElementById('lista-produtos');

    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span></section>`;

    totalGeral = totalGeral + conta;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}
