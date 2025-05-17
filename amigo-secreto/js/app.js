//guardar o nome do amigo no input nome-amigo
let listaNomes = [];
//por meio do botao adicionar() guardar o nome em <p id="lista-amigos"></p>
function adicionar() {
    let nomes = document.getElementById('nome-amigo').value;
    let nomesIncluidos = document.getElementById('lista-amigos').innerText;

    listaNomes.push(nomes);
    console.log(listaNomes);

    exibirText('lista-amigos', listaNomes);
}
function exibirText(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}
//no reiniciar() resetar os campos
//no botao sortear() fazer um sortear o outro e exibir em <p id="lista-sorteio"></p>
