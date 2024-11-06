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
    </script>
</body>
</html>
