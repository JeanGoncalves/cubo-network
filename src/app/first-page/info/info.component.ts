import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

import { RequestService } from './../request.service';
import { GridPeopleChart } from './../gridPeopleChart.model';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

	constructor(
		private requestService: RequestService
	) { }

	gridDetails;

	ngOnInit() {

		this.requestService.getGridPeople()
			.then(data => {
				this.gridDetails = data;
				this.initGridPeopleGraph(data)
			});
		// And for a doughnut chart
		/*
		
		document.getElementById('chart-info-legend').innerHTML = myChart.generateLegend(); 
		
		*/
	}

	initGridPeopleGraph (data: Array<GridPeopleChart>) {

		let ctx = document.getElementById("chart-info");
		let options = {
			responsive: false,
			legend: {
				display: true,
				position: 'right',
				labels: {
					boxWidth: 20
				}
			}
		};
		let myChart = new Chart(ctx, {
				type: 'doughnut',
				data: this.getDatasets(data),
				options: options
			});
	}

	getDatasets (data) {
		return {
				labels: data.map(item => item.name + ' ' + item.lastname),
				datasets: [
					{
						data: data.map(item => item.participation),
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
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
	}

}
