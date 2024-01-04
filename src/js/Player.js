export class Player {
    constructor(audioElement) {
        this.audioElement = audioElement;
    }

    play(musicSrc) {
        if (musicSrc) {
            this.audioElement.src = musicSrc;

            this.audioElement.play().then(() => {
                console.log("Reproduzindo música...");
            }).catch(error => {
                console.error("Erro ao reproduzir música:", error);
            });
        } else {
            console.error("Caminho da música não é válido.");
        }
    }

    pause() {
        this.audioElement.pause();
    }

    isPlaying() {
        return !this.audioElement.paused;
    }
}
