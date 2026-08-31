import leia from 'readline-sync';
import { dataAtual } from '../persistence/persistencia.js';

export function registrarVenda(produtos) {

    var nome = leia.question("Digite o nome do produto vendido: ");

    var contador = 0;

    while (contador < produtos.length) {

        if (produtos[contador][0] == nome) {

            var quantidade = leia.questionInt("Digite a quantidade vendida: ");

            if (quantidade <= produtos[contador][3]) {

                produtos[contador][3] = produtos[contador][3] - quantidade;
                produtos[contador][7] = dataAtual();

                console.log("\nVenda registrada com sucesso!");
                console.log("Estoque restante: " + produtos[contador][3]);

            } else {

                console.log("\nQuantidade maior que o estoque!");
            }

            break;
        }

        contador++;
    }
}