let produtos = document.getElementById('produto');
let selecionado = produtos.value;

let quantidade = document.getElementById('quantidade').value;
const nomeProduto = selecionado.split(' - R$')[0];
const preco = selecionado.match(/R\$(\d+)/)[1];

let listaProdutos = document.getElementById('lista-produtos');

