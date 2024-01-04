export class Player {
    constructor(audioElement) {
        this.audioElement = audioElement;

        // Adiciona um evento para lidar com erros de carregamento da fonte
        this.audioElement.addEventListener('error', () => {
            console.error("Erro ao carregar a fonte da música.");
        });

        // Adiciona um evento para lidar com a mudança da fonte
        this.audioElement.addEventListener('loadedmetadata', () => {
            console.log("Caminho da música válido.");
        });

        // Adiciona um evento para lidar com a pausa
        this.audioElement.addEventListener('pause', () => {
            console.log("Música pausada.");
        });

        // Adiciona um evento para lidar com a mudança do src
        this.audioElement.addEventListener('change', () => {
            console.log("Src do áudio alterado:", this.audioElement.src);
        });
    }

    play(musicSrc) {
        // Define o novo caminho da música
        this.audioElement.src = musicSrc;

        // Tenta reproduzir a música
        this.audioElement.play().then(() => {
            console.log("Reproduzindo música...");
        }).catch(error => {
            console.error("Erro ao reproduzir música:", error);
        });
    }

    pause() {
        // Pausa a música
        this.audioElement.pause();
    }

    isPlaying() {
        // Verifica se a música está sendo reproduzida
        return !this.audioElement.paused;
    }
}
