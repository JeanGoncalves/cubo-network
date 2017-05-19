export class ChartData {

    constructor (
        public _borderWidth: Array<Number>,
        public _borderColor: Array<String>,
        public _backgroundColor: Array<String>,
        public _hoverBackgroundColor: Array<String>,
        public _data?: Array<Number>
    ) {}

    public datasets =[{
        borderWidth: this._borderWidth,
        borderColor: this._borderColor,
        backgroundColor: this._backgroundColor,
        hoverBackgroundColor: this._hoverBackgroundColor,
        data: this._data
    }];
}