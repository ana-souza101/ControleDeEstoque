import leia from 'readline-sync';
import { dataAtual } from '../persistence/persistencia.js';

export function reporEstoque(produtos) {

    var nome = leia.question("Digite o nome do produto: ");

    var contador = 0;

    while (contador < produtos.length) {

        if (produtos[contador][0] == nome) {

            var quantidade = leia.questionInt("Digite a quantidade que deseja adicionar: ");

            produtos[contador][3] = produtos[contador][3] + quantidade;
            produtos[contador][7] = dataAtual();

            console.log("\nEstoque atualizado com sucesso!");
            console.log("Nova quantidade: " + produtos[contador][3]);

            break;
        }

        contador++;
    }
}