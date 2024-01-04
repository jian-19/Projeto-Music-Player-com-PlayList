// index.js
import { Music } from './Music.js';
import { Buttons } from './Buttons.js';
import { Player } from './Player.js';

document.addEventListener("DOMContentLoaded", function () {
    const playlistContainer = document.querySelector(".playList");
    const song = document.querySelector(".audio");
    const coverImage = document.querySelector(".coverAlbum");

    if (playlistContainer && song && coverImage) {
        const playlist = [
            new Music("Ali Te Ama", "Rayane & Rafaela", "./src/Music/rayane-e-rafaela/Ali-Te-Ama.png", "./src/Music/rayane-e-rafaela/ali-te-ama.mp3"),
            new Music("Caixa De Madeira", "Zé Neto e Cristiano", "./src/Music/yasmin-santos/Principalmente Pessoas.jpg", "./src/Music/yasmin-santos/Principalmente Pessoas.mp3"),
            new Music("Principalmente Pessoas", "Yasmin Santos, Diego & Victor Hugo", "./src/Music/yasmin-santos/Principalmente Pessoas.jpg", "./src/Music/yasmin-santos/Principalmente Pessoas.mp3"),
            // Adicione mais músicas conforme necessário
        ];

        const musicPlayer = new Player(song);

        const buttons = new Buttons(
            document.querySelector(".prev"),
            document.querySelector(".play-pause"),
            document.querySelector(".next"),
            musicPlayer
        );

        buttons.prev.addEventListener("click", function () {
            console.log("Botão de anterior clicado");
            // Lógica para ação do botão "prev"
        });

        buttons.playPause.addEventListener("click", function () {
            console.log("Botão de pausa/play clicado");
            // Lógica para ação do botão "pause"
        });

        buttons.next.addEventListener("click", function () {
            console.log("Botão de próximo clicado");
            // Lógica para ação do botão "next"
        });


        // Adiciona eventos de clique aos elementos da playlist
        // ...

// Adiciona eventos de clique aos elementos da playlist
playlist.forEach((music, index) => {
    const musicDiv = document.createElement("div");
    musicDiv.innerHTML = `
        <p>${music.name} - ${music.artist}</p>`;
    playlistContainer.appendChild(musicDiv);

    // Adiciona evento de clique a cada música na playlist
    musicDiv.addEventListener('click', function () {
        console.log("Caminho da música:", music.music);
        musicPlayer.play(music.music);
        console.log("Caminho da capa do álbum:", music.cover.src);
        coverImage.src = music.cover.src;
    });
});
}
});
