//guardar o nome do amigo no input nome-amigo
let listaNomes = [];
//por meio do botao adicionar() guardar o nome em <p id="lista-amigos"></p>
function adicionar() {
    let nomes = document.getElementById('nome-amigo').value;
    // let nomesIncluidos = document.getElementById('lista-amigos').innerText;

    listaNomes.push(nomes);
    console.log(listaNomes);

    let nomesIncluidos = document.getElementById('lista-amigos');
    nomesIncluidos.innerHTML = listaNomes;

    document.getElementById('nome-amigo').value = '';
}

function sortear(listaNomes){
    embaralha(listaNomes);
    
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
//no botao sortear() fazer um sortear o outro e exibir em <p id="lista-sorteio"></p>
//no reiniciar() resetar os campos
function reiniciar() {
}