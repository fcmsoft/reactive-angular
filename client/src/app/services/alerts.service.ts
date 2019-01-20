import { Injectable } from '@angular/core';
import { WS_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private _connection = new WebSocket(WS_URL);
  public alertas = [];
  public contador = 0;

  constructor() {
    this._connection.onerror = (error) => {
      console.log(`WebSocket error: ${error}`);
    };

    this._connection.onmessage = (e) => {
      const data = JSON.parse(e.data);
      data.map(alert => {
        this.alertas.push({...alert, leido: false});
        this.contador++;
      });
    };
  }

  readAlert(alert) {
    alert.leido = true;
    this.contador--;
  }
}
