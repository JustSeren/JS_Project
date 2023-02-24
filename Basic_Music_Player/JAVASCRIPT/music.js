class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Matsuri", "Fujii Kaze", "matsuri.png", "1.mp3"),
    new Music("Adieu", "Rammstein", "adieu.png", "2.mp3"),
    new Music("Deutschland", "Rammstein", "deutschland.png", "3.mp3")
]