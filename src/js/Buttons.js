export class Buttons {
    constructor(prev, playPause, next, player) {
        this.prev = prev;
        this.playPause = playPause;
        this.next = next;
        this.player = player;

        this.playPause.addEventListener("click", () => this.playPauseHandler());
        this.prev.addEventListener("click", () => this.prevHandler());
        this.next.addEventListener("click", () => this.nextHandler());
    }

    playPauseHandler() {
        if (this.player.isPlaying()) {
            this.pause();
        } else {
            // Se não estiver reproduzindo, verifica se a fonte da música é válida antes de iniciar a reprodução
            if (this.player.srcIsValid()) {
                this.play();
            }
        }
    }

    play() {
        this.player.play();
        this.updatePlayPauseIcon(true);
    }

    pause() {
        this.player.pause();
        this.updatePlayPauseIcon(false);
    }

    nextHandler() {
        // Lógica para avançar para a próxima música
        console.log("Botão de próximo clicado");
    }

    prevHandler() {
        // Lógica para voltar para a música anterior
        console.log("Botão de anterior clicado");
    }

    updatePlayPauseIcon(isPlaying) {
        // Atualiza o ícone de play/pause com base no estado de reprodução
        const icon = isPlaying ? "pause_circle" : "play_circle";
        this.playPause.textContent = icon;
    }
}
