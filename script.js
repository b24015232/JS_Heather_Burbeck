import { DataHistory } from "./DataHistory.js"
import { LiveData } from "./LiveData.js"
import { Observateur } from "./Observateur.js";

var O_live = new LiveData;
var O_History = new DataHistory;
var O_Observateur = new Observateur;

O_Observateur.subcribe(O_live);
O_Observateur.subcribe(O_History);
O_Observateur.startNotify();

O_live.displayLiveData();
O_History.displayDataHistory();