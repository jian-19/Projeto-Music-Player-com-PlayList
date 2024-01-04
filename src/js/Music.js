// Music.js

export class Music {
    constructor(name, artist, coverSrc, musicSrc) {
        this.name = name;
        this.artist = artist;
        this.cover = {
            src: coverSrc
        };
        // Certifique-se de definir a propriedade 'music' adequadamente
        this.music = musicSrc;
    }
}
