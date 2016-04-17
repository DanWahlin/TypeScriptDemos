import { IAccount } from './iAccount';

export class BankingAccount {
    private _balance: number = 0;
    private _title: string;

    constructor(title: string) {
        this._title = title;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    widthdrawal(amount: number) : number {
        if (this._balance > amount) {
            this._balance -= amount;
            return amount;
        }
        else return 0;
    }

    get accountInfo() : IAccountInfo<string, number> {
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber: Constants.BANK_NUMBER
        }
    }

    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        this._balance = val;
    }

    get title() {
        return this._title;
    }

    set title(val: string) {
        this._title = val;
    }

} 
