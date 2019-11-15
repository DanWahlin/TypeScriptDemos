import { BankAccount } from './bank-account';
import { AccountType } from './enums';

export class SavingsAccount extends BankAccount {
    private _interestRate: number;
    accountType = AccountType.Savings;

    constructor(accountSettings: any) {
        super(accountSettings);
        this._interestRate = accountSettings.interestRate;

        // Simulate interest over time
        setInterval(() => {
            this.addInterest();
        }, 60000);
    }

    getAccountInfo() {
        return {

        };
    }

    private addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }
} 

