export class DataHistory {

    constructor() {
        this.I_currentTemp = 0;
        this.O_arrayHistorique = [];
        this.O_historyDataZone = document.getElementById("dataHistory");
    }

    update(currentTemp) {
        console.log("update call ")
        this.O_arrayHistorique.push(currentTemp)

    }
    getCurrentTemp() {
        this.I_currentTemp = currentTemp
    }

    displayDataHistory() {
        console.log(this.O_arrayHistorique)
        this.O_historyDataZone.textContent = this.O_arrayHistorique;
    }
}