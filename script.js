document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    // Verifica se os elementos existem antes de adicionar os event listeners
    if (botaoDeAcessibilidade && opcoesDeAcessibilidade) {
        botaoDeAcessibilidade.addEventListener('click', function() {
            botaoDeAcessibilidade.classList.toggle('rotacao-botao');
            opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    
            const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
            botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
        });
    }
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    
    // Verificação se os botões existem
    if (aumentaFonteBotao && diminuiFonteBotao && alternaContraste) {
        let tamanhoAtualFonte = 1;

        aumentaFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = ${tamanhoAtualFonte}rem;
        });

        diminuiFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = ${tamanhoAtualFonte}rem;
        });

        alternaContraste.addEventListener('click', function() {
            document.body.classList.toggle('alto-contraste');
        });
    }

    // ScrollReveal para animação de elementos
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('#inicio', { delay: 500 });
        ScrollReveal().reveal('#tropicalia', { delay: 500 });
        ScrollReveal().reveal('#galeria', { delay: 500 });
        ScrollReveal().reveal('#contato', { delay: 500 });
    }
});