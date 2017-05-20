class SavingsAccount extends BankingAccount {
    private _interestRate: number;

    constructor(title: string, interestRate: number) {
        super(title);
        this._interestRate = interestRate;
    }

    addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }
} 

var savings = new SavingsAccount('Jane Doe', 2.5);
savings.deposit(1000);
savings.addInterest();
var savingsDiv = $('#savings');
savingsDiv.html('$' + savings.balance.toFixed(2) + ' (after interest added)');