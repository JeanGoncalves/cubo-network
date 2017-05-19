import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import { PieChart } from './pieChart.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService {

	constructor(
        private http: Http
	) { }

	private APIUrl = 'https://of900lijd5.execute-api.us-east-1.amazonaws.com/v1/front-end/';
    private headers: Headers = new Headers({'Content-type': 'application/json'});

	getPieChart (): Promise<any> {
		let url = 'pie-chart';
        return this.http.get(this.APIUrl + url, {headers: this.headers})
            .toPromise()
            .then((response: Response) => this.getPieChartResponse(response))
            .catch(this.handleError);
    }

	getPieChartResponse (response: Response) {
		let d = response.text().replace('{','').replace('}','').trim().split('\n');
		let data = {};
		d.forEach(t => {
			let c = t.split(':');
			data[c[0].trim()] = c[1].trim();
		});
		return data;
	}

	getGridPeople (): Promise<any> {
		let url = 'grid-people';
        return this.http.get(this.APIUrl + url, {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.text())
            .catch(this.handleError);
	}

    /**
     * Method for any error request
     * @param err Object for error
     * @author Jean Gonçalves
     */
    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}
