import fs from 'fs'; // Fylem System

const arquivo = new URL('./estoque.json', import.meta.url);

// Carrega os produtos salvos no arquivo estoque.json
export function carregarProdutos() {
    const dados = fs.readFileSync(arquivo, 'utf-8');
    return JSON.parse(dados);
}

// Salva os produtos no arquivo estoque.json
export function salvarProdutos(produtos) {
    fs.writeFileSync(arquivo, JSON.stringify(produtos, null, 4));
}

// Gera o próximo ID disponível
export function gerarId(produtos) {
    let maiorId = 0;

    for (let produto of produtos) {
        if (produto[5] > maiorId) {
            maiorId = produto[5];
        }
    }

    return maiorId + 1;
}

// Retorna a data e hora atual
export function dataAtual() {
    return new Date().toISOString();
}