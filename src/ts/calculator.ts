class Calculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.wireEvents();
    }

    wireEvents() {
        document.getElementById('Add').addEventListener('click',
            event => {
                this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString()
            });
        document.getElementById('Subtract').addEventListener('click',
            event => {
                this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString()
            });
    }

    add(x: number, y : number) {
        return x + y;
    }

    subtract(x : number, y: number) {
        return x - y;
    }
}

window.onload = function () {
    var calc = new Calculator('X','Y','Output');
};




