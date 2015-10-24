(function () {

    //Stand-alone function
    function displayResult(msg: string) {
        result.innerHTML = msg;
    }

    //Anonymous function/method
    var compound = function (amt: number, rate: number, years: number): number {
        var months = years * 12;
        var yrRate: number = (rate / 12) / 100;
        return amt * Math.pow(1 + yrRate, months);
    };

    //Lambda function
    var $ = (id) => document.getElementById(id);

    var totalButton: HTMLButtonElement = <HTMLButtonElement>$('totalButton'),
        amount: HTMLInputElement = <HTMLInputElement>$('amount'),
        rate: HTMLInputElement = <HTMLInputElement>$('rate'),
        years: HTMLInputElement = <HTMLInputElement>$('years'),
        result = $('result');

    //Lambda function
    totalButton.addEventListener('click',(e) => {
        var amountValue = parseFloat(amount.value),
            rateValue = parseFloat(rate.value),
            yearsValue = parseFloat(years.value);

        displayResult('$' + compound(amountValue, rateValue, yearsValue).toFixed(2));
    });

} ());