import leia from 'readline-sync';

export function consultarProdutos(produtos) {

    if (produtos.length == 0) {

        console.log("\nNenhum produto cadastrado!");

    } else {

        var nomeConsulta = leia.question("Digite o nome do produto que deseja consultar: ");

        var contador = 0;
        var encontrado = false;

        while (contador < produtos.length) {

            if (produtos[contador][0] == nomeConsulta) {

                console.log("\n===== PRODUTO ENCONTRADO =====");
                console.log("Nome: " + produtos[contador][0]);
                console.log("Tamanho: " + produtos[contador][1]);
                console.log("Cor: " + produtos[contador][2]);
                console.log("Quantidade: " + produtos[contador][3]);
                console.log("Preço: R$ " + produtos[contador][4].toFixed(2));

                encontrado = true;
            }

            contador++;
        }

        if (encontrado == false) {
            console.log("\nProduto não encontrado!");
        }
    }
}