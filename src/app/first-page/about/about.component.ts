import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor() { }


	ngOnInit() {
		let chart = {
			percent: document.getElementById('chart-percent'),
			hour: document.getElementById('chart-hour'),
			value: document.getElementById('chart-value')
		}

		let data = {
			datasets: [
				{
					data: [5, 20],
					borderWidth: [0,1],
					borderColor: ['','#fec30c'], 
					backgroundColor: [
						"#404a58",
						"#ffffff"
					],
					hoverBackgroundColor: [
						"#404a58",
						"#ffffff"
					]
				}]
		};

		let options = {
			responsive: false,
			legend: {display: false},
			tooltips: {enabled: false},
			cutoutPercentage: 90
		};
		
		new Chart(chart.percent, {
			type: 'doughnut',
			data: data,
			options: options
		});

		new Chart(chart.hour, {
			type: 'doughnut',
			data: data,
			options: options
		});

		new Chart(chart.value, {
			type: 'doughnut',
			data: data,
			options: options
		});
	}

	ngAfterContentInit() {
		//Called after ngOnInit when the component's or directive's content has been initialized.
		//Add 'implements AfterContentInit' to the class.

	}

}
