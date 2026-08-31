import leia from 'readline-sync'
import { cadastrarProdutos } from './functions/cadastrar.js';
import { listarProdutos } from './functions/listar.js';
import { consultarProdutos } from './functions/consultar.js';
import { atualizarProduto } from './functions/atualizar.js';
import { excluirProduto } from './functions/excluir.js';
import { reporEstoque } from './functions/reposicao.js';
import { registrarVenda } from './functions/registrar.js';
import { pesquisarProduto } from './functions/pesquisa.js';
import { carregarProdutos, salvarProdutos } from './persistence/persistencia.js';

// Carrega os produtos salvos no JSON quando o sistema inicia.
var produtos = carregarProdutos();

do {
    console.log("\n==================== MENU ====================\n");
    console.log("           1 - Cadastrar produto                  ");
    console.log("           2 - Listar produtos                    ");
    console.log("           3 - Consultar produto                  ");
    console.log("           4 - Atualizar produto                  ");
    console.log("           5 - Excluir produto                    ");
    console.log("           6 - Registrar venda                    ");
    console.log("           7 - Repor estoque                      ");
    console.log("           8 - Pesquisar produto                  ");
    console.log("           0 - Sair                               ");
    console.log("\n==============================================\n");

    var opcao = leia.questionInt(" Digite a opcao desejada: ");

    switch (opcao) {
        case 0:
            console.log("\nSistema encerrado!")
            break;
        case 1:
            cadastrarProdutos(produtos);
            salvarProdutos(produtos);
            break;
        case 2:
            listarProdutos(produtos);
            break;
        case 3:
            consultarProdutos(produtos);
            break;
        case 4:
            atualizarProduto(produtos);
            salvarProdutos(produtos);
            break;
        case 5:
            excluirProduto(produtos);
            salvarProdutos(produtos);
            break;
        case 6:
            registrarVenda(produtos);
            salvarProdutos(produtos);
            break;
        case 7:
            reporEstoque(produtos);
            salvarProdutos(produtos);
            break;
        case 8:
            pesquisarProduto(produtos);
            break;
        default:
            console.log("\nOpcao invalida! Tente novamente.")
    }

    if (opcao !== 0) {
        leia.question("\naperte ENTER para continuar no menu...");
    }

} while (opcao !== 0);
