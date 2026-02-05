export class GenerateTemp {
    constructor() {
        this.temp;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


    getA_arrayInt() {
        return this.temp;
    }

    generateRandomTemp() {
        this.temp = this.getRandomInt(-10, 40);
    }

    startGenerate() {
        let i = 0;
        setInterval(() => {
            if (i < 20) {
                this.generateRandomTemp()
                i++
            } else {
                clearInterval()
            }
        }, 2000)
    }
}