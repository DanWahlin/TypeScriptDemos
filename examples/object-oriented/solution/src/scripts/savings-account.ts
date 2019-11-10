import { BankingAccount } from './bank-account';
import { AccountType } from './enums';
import { AccountSettings } from './interfaces';


export class SavingsAccount extends BankingAccount {
    private _interestRate: number;
    accountType = AccountType.Savings;

    constructor(accountSettings: AccountSettings) {
        super(accountSettings);
        this._interestRate = accountSettings.interestRate;

        // Simulate interest over time
        setInterval(() => {
            this.addInterest();
        }, 60000);
    }

    private addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }
} 

