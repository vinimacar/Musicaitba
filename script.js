<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Música Ituiutaba - Início</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">Música Ituiutaba</div>
            <ul class="menu">
                <li><a href="index.html">Início</a></li>
                <li><a href="ensaios-locais.html">Ensaios Locais</a></li>
                <li><a href="ensaios-regionais.html">Ensaios Regionais</a></li>
                <li><a href="reunioes.html">Reuniões</a></li>
                <li><a href="gem.html">GEM</a></li>
                <li><a href="downloads.html">Downloads</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
            <div class="menu-toggle" onclick="toggleMenu()">☰</div>
        </nav>
    </header>

    <section class="hero">
        <h1>Bem-vindo ao Música Ituiutaba</h1>
        <p>Conectando músicos e promovendo a arte musical na nossa comunidade.</p>
        <a href="contato.html" class="btn">Entre em Contato</a>
    </section>

    <footer>
        <p>&copy; 2024 Música Ituiutaba. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>


<script>
        // Atualiza a página a cada 5 minutos (300000 ms)
        setTimeout(function() {
            window.location.reload();
        }, 300000); // 300000 ms = 5 minutos

   // script.js
 const dados = [
    // Cada sub-array é uma linha com 18 colunas
    ["Dado 1", "Dado 2", "Dado 3", "Dado 4", "Dado 5", "Dado 6", "Dado 7", "Dado 8", "Dado 9", "Dado 10", "Dado 11", "Dado 12", "Dado 13", "Dado 14", "Dado 15", "Dado 16", "Dado 17", "Dado 18"],
    ["Dado 1", "Dado 2", "Dado 3", "Dado 4", "Dado 5", "Dado 6", "Dado 7", "Dado 8", "Dado 9", "Dado 10", "Dado 11", "Dado 12", "Dado 13", "Dado 14", "Dado 15", "Dado 16", "Dado 17", "Dado 18"],
    ["Dado 1", "Dado 2", "Dado 3", "Dado 4", "Dado 5", "Dado 6", "Dado 7", "Dado 8", "Dado 9", "Dado 10", "Dado 11", "Dado 12", "Dado 13", "Dado 14", "Dado 15", "Dado 16", "Dado 17", "Dado 18"],
    // ... Adicione mais linhas conforme necessário
];

// Função para mostrar a área de adicionar informações
function addInfo(location) {
    const infoContainer = document.getElementById('info-container');
    const locationName = document.getElementById('location-name');
    locationName.textContent = location;  // Exibe o nome do local
    infoContainer.style.display = 'block'; // Torna o formulário visível
}

// Função para salvar as informações
function saveInfo() {
    const location = document.getElementById('location-name').textContent;
    const infoText = document.getElementById('info-text').value;

    if (infoText) {
        alert('Informações salvas para ' + location + ': ' + infoText);
        document.getElementById('info-text').value = '';  // Limpa o campo de texto
        document.getElementById('info-container').style.display = 'none';  // Esconde o formulário
    } else {
        alert('Por favor, insira as informações antes de salvar.');
    }
}
// Função para gerar a tabela com 22 linhas e 18 colunas
function gerarTabela() {
    const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

    // Loop para criar as 22 linhas
    for (let i = 1; i <= 22; i++) {
        const tr = document.createElement('tr'); // Criar uma linha

        // Loop para criar as 18 colunas (células)
        for (let j = 1; j <= 18; j++) {
            const td = document.createElement('td'); // Criar uma célula
            td.textContent = `Linha ${i} - Coluna ${j}`; // Adicionar conteúdo à célula
            tr.appendChild(td); // Adicionar célula à linha
        }

        tabela.appendChild(tr); // Adicionar linha ao corpo da tabela
    }
}

// Chama a função para gerar a tabela assim que a página carregar
window.onload = gerarTabela;

    </script>
</body>
</html>

