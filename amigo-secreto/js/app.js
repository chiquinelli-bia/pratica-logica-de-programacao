let listaNomes = [];

function adicionar() {
    let nomes = document.getElementById('nome-amigo').value;

    listaNomes.push(nomes);
    console.log(listaNomes);

    let nomesIncluidos = document.getElementById('lista-amigos');
    nomesIncluidos.innerHTML = listaNomes;

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (listaNomes.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(listaNomes);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaNomes.length; i++) {
        if (i == listaNomes.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] +' --> ' +listaNomes[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] +' --> ' +listaNomes[i + 1] + '<br/>';
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}
//no reiniciar() resetar os campos
function reiniciar() {
}