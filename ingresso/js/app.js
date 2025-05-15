function comprar () {
    let tiposIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);


    if (tiposIngresso.value == 'pista') {
        comprarPista();
    } else if (tiposIngresso.value == 'superior') {
        comprarSuperior();
    } else {
        comprarInferior();
    }

    function comprarPista () {
        let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
        if(quantidade > quantidadePista) {
           alert('Quantidade indísponivel.');
        } else {
            quantidadePista = quantidadePista - quantidade;
            document.getElementById('qtd-pista').textContent = quantidadePista;
            alert('Compra efetuada com sucesso!');
        }
    }
    function comprarSuperior () {
        let quantidadeSuperior = document.getElementById('qtd-superior').textContent;
        if(quantidade > quantidadeSuperior) {
           alert('Quantidade indísponivel.');
        } else {
            quantidadeSuperior = quantidadeSuperior - quantidade;
            document.getElementById('qtd-superior').textContent = quantidadeSuperior;
            alert('Compra efetuada com sucesso!');
        }
    }
    function comprarInferior () {
        let quantidadeInferior = document.getElementById('qtd-inferior').textContent;
        if(quantidade > quantidadeInferior) {
           alert('Quantidade indísponivel.');
        } else {
            quantidadeInferior = quantidadeInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = quantidadeInferior;
            alert('Compra efetuada com sucesso!');
        }
    }
}
        
        
