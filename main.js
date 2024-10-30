function alterarTitulo() {
    document.getElementById("titulo").textContent = "Novo Titulo"; 
}

function alterarImagem() {
    document.getElementById("imagem").src = "img/yelloe1.jpg";
}

function alterarParagrafo() {
    document.getElementById("paragrafo").style.color = "blue";
}

function tocarAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

function toggleClass() {
    var botoes = document.querySelectorAll('.botao');
    botoes.forEach(function(botao) {
        botao.classList.toggle('ativo');
    })
}