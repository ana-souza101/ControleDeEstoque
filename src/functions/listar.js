import leia from 'readline-sync';

export function listarProdutos(produtos) {

    if (produtos.length == 0) {

        console.log("\nNenhum produto cadastrado!");

    } else {

        console.log("\n===== PRODUTOS CADASTRADOS =====");

        var contador = 0;

        while (contador < produtos.length) {

            console.log("\nProduto " + (contador + 1));
            console.log("Nome: " + produtos[contador][0]);
            console.log("Tamanho: " + produtos[contador][1]);
            console.log("Cor: " + produtos[contador][2]);
            console.log("Quantidade: " + produtos[contador][3]);
            console.log("Preço: R$ " + produtos[contador][4].toFixed(2));

            contador++;
        }
    }
}