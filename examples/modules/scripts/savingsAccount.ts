import { BankingAccount } from './bankingAccount';

export class SavingsAccount extends BankingAccount {
    private _interestRate: number;

    constructor(title: string, interestRate: number) {
        super(title);
        this._interestRate = interestRate;
    }

    addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }
} 

