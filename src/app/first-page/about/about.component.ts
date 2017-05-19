import { PieChart } from './../pieChart.model';
import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

import { RequestService } from './../request.service';
import { ChartData } from './../chart.data.model';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor(
		private requestService: RequestService
	) { }

	gridChart = {};
	percentGraph;
	hourGraph;
	valueGraph;
	
	ngOnInit() {
		let pieChartData;

		this.requestService.getPieChart()
			.then((data: PieChart) => {
				this.initPieChart(data);
			});

		this.requestService.getGridPeople()
			.then((data) => {
				var str = JSON.stringify(eval("(" + data + ")"));
				this.gridChart = JSON.parse(str)
			});

	}

	initPieChart(data: PieChart) {

		this.percentGraph = Number(data.percent);
		this.hourGraph = data.hour;
		this.valueGraph = Number(data.currency);

		this.createChart(document.getElementById('chart-percent'), this.newDatasets([Number(data.percent), 100]));
		this.createChart(document.getElementById('chart-hour'), this.newDatasets([Number(data.hour), 16]));
		this.createChart(document.getElementById('chart-value'), this.newDatasets([Number(data.currency), 1000]));
	}

	newDatasets(data: Array<Number>) {
		return new ChartData([0,1],['','#fec30c'],["#404a58","#ffffff"],["#404a58","#ffffff"], data);
	}

	createChart(ctx, dataset) {
		let options = {
			responsive: false,
			legend: {display: false},
			tooltips: {enabled: false},
			cutoutPercentage: 90
		};

		new Chart(ctx, {
			type: 'doughnut',
			data: dataset,
			options: options
		});
	}
}
