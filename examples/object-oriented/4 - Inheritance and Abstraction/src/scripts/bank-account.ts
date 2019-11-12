import { AccountType } from './enums';

export class BankAccount {
    private _balance = 0;
    id: number;
    title: string;
    accountType: AccountType;

    constructor(accountSettings: any) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }

    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        if (val >= 0) {
            this._balance = val;
        }
        else {
            throw Error('Balance cannot be negative!');
        }
    }

} 
