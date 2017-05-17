import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// And for a doughnut chart
		let ctx = document.getElementById("chart-info");
		let data = {
				labels: [
					"Hugo Silva",
					"Carlos Moura",
					"Eliza Souza",
					"Fernanda Oliveira",
					"Anderson Santos",
				],
				datasets: [
					{
						data: [20, 5, 20, 15, 40],
						backgroundColor: [
							"#2c97dd",
							"#00bb9b",
							"#9c56b8",
							"#b2b4b4",
							"#ea4b35"
						],
						hoverBackgroundColor: [
							"#2c97dd",
							"#00bb9b",
							"#9c56b8",
							"#b2b4b4",
							"#ea4b35"
						]
					}]
			};
		let myChart = new Chart(ctx, {
				type: 'doughnut',
				data: data,
				options: {
					responsive: false,
					legend: {display: false}
				}
			});
		document.getElementById('chart-info-legend').innerHTML = myChart.generateLegend();
	}

}
