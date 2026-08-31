import leia from 'readline-sync';
import { gerarId, dataAtual } from '../persistence/persistencia.js';

export function cadastrarProdutos(produtos) {

    var nome = leia.question("Digite o nome do produto: ");
    var tamanho = leia.question("Digite o tamanho (P, M, G ou GG): ");
    var cor = leia.question("Digite a cor: ");
    var quantidade = leia.questionInt("Digite a quantidade: ");
    var preco = leia.questionFloat("Digite o preco: ");

    var agora = dataAtual();

    var produto = [
        nome,
        tamanho,
        cor,
        quantidade,
        preco,
        gerarId(produtos),
        agora,
        agora
    ];

    produtos.push(produto);

    console.log("\nProduto cadastrado com sucesso!");
}
