import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

	constructor() { }

	slideIndex = 1;
	mySlide = document.getElementsByClassName("mySlides");
	elipse = document.getElementsByClassName("btn-elipse");
	timeSlide = 4;

	ngOnInit() {
		this.showDivs(this.slideIndex);
	}

	ngAfterContentInit() {
		this.looping(this.mySlide.length, this.timeSlide);
	}

	plusDivs(n) {
		this.showDivs(this.slideIndex += n);
	}

	currentDiv(n) {
		this.showDivs(this.slideIndex = n);
	}

	showDivs(n) {
		let i;
		let x = document.getElementsByClassName("mySlides");
		if (n > this.mySlide.length) {
			this.slideIndex = 1;
		} 
		if (n < 1) {
			this.slideIndex = this.mySlide.length;
		}
		for (i = 0; i < this.mySlide.length; i++) {
			this.mySlide[i]['style'].display = "none"; 
		}
		for (i = 0; i < this.elipse.length; i++) {
			this.elipse[i].className = this.elipse[i].className.replace(" change", "");
		}
		this.mySlide[this.slideIndex - 1]['style'].display = "block";
		this.elipse[this.slideIndex-1].className += " change";
	}

	looping(maxLength, time) {
		setInterval(() => this.plusDivs(1), time * 1000);
	}

}
