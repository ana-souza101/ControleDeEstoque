import leia from 'readline-sync';
import { dataAtual } from '../persistence/persistencia.js';

export function atualizarProduto(produtos) {

    if (produtos.length == 0) {

        console.log("\nNenhum produto cadastrado!");

    } else {

        var nomeConsulta = leia.question("Digite o nome do produto que deseja atualizar: ");

        var contador = 0;
        var encontrado = false;

        while (contador < produtos.length) {

            if (produtos[contador][0] == nomeConsulta) {

                console.log("\n===== ATUALIZAR PRODUTO =====");

                produtos[contador][0] = leia.question("Digite o novo nome: ");
                produtos[contador][1] = leia.question("Digite o novo tamanho: ");
                produtos[contador][2] = leia.question("Digite a nova cor: ");
                produtos[contador][3] = leia.questionInt("Digite a nova quantidade: ");
                produtos[contador][4] = leia.questionFloat("Digite o novo preco: ");
                produtos[contador][7] = dataAtual();

                console.log("\nProduto atualizado com sucesso!");

                encontrado = true;
            }

            contador++;
        }

        if (encontrado == false) {
            console.log("\nProduto não encontrado!");
        }
    }
}