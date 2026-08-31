import leia from 'readline-sync';

export function excluirProduto(produtos) {

    var nome = leia.question("Digite o nome do produto que deseja excluir: ");

    var contador = 0;

    while (contador < produtos.length) {

        if (produtos[contador][0] == nome) {

            produtos.splice(contador, 1);

            console.log("\nProduto excluído com sucesso!");

            break;
        }

        contador++;
    }
}