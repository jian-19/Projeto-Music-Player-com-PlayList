// index.js
import { Music } from './Music.js';
import { Buttons } from './Buttons.js';
import { Player } from './Player.js';

document.addEventListener("DOMContentLoaded", function () {
    const playlistContainer = document.querySelector(".playList");
    const song = document.querySelector(".audio");
    const coverImage = document.querySelector(".coverAlbum");

    let currentMusicIndex = 0;
    let isPlaying = false;

    if (playlistContainer && song && coverImage) {
        const playlist = [
            new Music("Ali Te Ama", "Rayane & Rafaela", "./src/Music/rayane-e-rafaela/Ali-Te-Ama.png", "./src/Music/rayane-e-rafaela/ali-te-ama.mp3"),
            new Music("Caixa De Madeira", "Zé Neto e Cristiano", "./src/Music/ze-neto-e-cristiano/caixa-de-madeira.jpg", "./src/Music/ze-neto-e-cristiano/Caixa de Madeira.mp3"),
            new Music("Principalmente Pessoas", "Yasmin Santos, Diego & Victor Hugo", "./src/Music/yasmin-santos/Principalmente Pessoas.jpg", "./src/Music/yasmin-santos/Principalmente Pessoas.mp3"),
            // Adicione mais músicas conforme necessário
        ];

        const musicPlayer = new Player(song);

        const buttons = new Buttons(
            document.querySelector(".prev"),
            document.querySelector(".play-pause"),
            document.querySelector(".next"),
            musicPlayer,
            playlist
        );

        buttons.prev.addEventListener("click", function () {
            console.log("Botão de anterior clicado");
            currentMusicIndex = (currentMusicIndex - 1 + playlist.length) % playlist.length;
            playCurrentMusic();
        });

        buttons.playPause.addEventListener("click", function () {
            console.log("Botão de pausa/play clicado");
            if (isPlaying) {
                musicPlayer.pause();
            } else {
                musicPlayer.play();
            }
            isPlaying = !isPlaying;
        });

        buttons.next.addEventListener("click", function () {
            console.log("Botão de próximo clicado");
            currentMusicIndex = (currentMusicIndex + 1) % playlist.length;
            playCurrentMusic();
        });

        // Adiciona eventos de clique aos elementos da playlist
        playlist.forEach((music, index) => {
            const musicDiv = document.createElement("div");
            musicDiv.innerHTML = `
                <p>${music.name} - ${music.artist}</p>`;
            playlistContainer.appendChild(musicDiv);

            // Adiciona evento de clique a cada música na playlist
            musicDiv.addEventListener('click', function () {
                currentMusicIndex = index;
                playCurrentMusic();
            });
        });

        function playCurrentMusic() {
            const currentMusic = playlist[currentMusicIndex];
            musicPlayer.play(currentMusic.music);
            coverImage.src = currentMusic.cover.src;
            isPlaying = true;
        }
    }
});