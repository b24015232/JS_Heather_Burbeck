export class LiveData {

    constructor() {
        this.currentTemp = 0;
        this.O_LiveDataText = document.getElementById("currentData");
    }

    update(currentTemp) {
        this.currentTemp = currentTemp
    }

    displayLiveData() {
        this.O_LiveDataText.textContent = this.currentTemp;
    }
}