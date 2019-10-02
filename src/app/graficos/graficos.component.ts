import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Relatório de sistema de contagem"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 50, label: "Dentro" },
          { y: 10, label: "Fora" }
        ]
      }]
    });
      
    chart.render();
  }

}


