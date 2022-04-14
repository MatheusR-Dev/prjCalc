import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  precoGasolina: number = null;
  distancia: number = null;
  consumo: number = null;
  resultado: number = 0;

  constructor() { }

  calcCusto() {
    if (this.precoGasolina && this.distancia && this.consumo)
      this.resultado = this.distancia / this.consumo * this.precoGasolina
    else
      this.resultado = 0;
  }
}
