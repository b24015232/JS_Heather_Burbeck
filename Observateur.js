import { GenerateTemp } from "./GenerateTemp.js"
export class Observateur {
    constructor() {
        this.A_arrayFollowers = [];
        this.RandomTemp = new GenerateTemp();
        this.RandomTemp.startGenerate();
    }

    subcribe(newFollower) {
        this.A_arrayFollowers.push(newFollower);
    }

    unsubcribe(oldFollower) {
        this.A_arrayFollowers.remove(oldFollower);
    }

    notify() {
        this.A_arrayFollowers.forEach(follower => follower.update(this.RandomTemp))
    }

    startNotify() {
        let i = 0;

        setInterval(() => {
            if (i < 20) {
                this.notify();
                i++;
            }
        }, 2000)

    }

}