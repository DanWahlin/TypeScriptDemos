import { Account, AccountInfo, AccountSettings } from './interfaces';
import { Constants } from './constants';
import { AccountType } from './enums';

export abstract class BankingAccount implements Account {
    id: number;
    title: string;
    private _balance = 0;
    abstract accountType: AccountType;

    constructor(accountSettings: AccountSettings) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    widthdrawal(amount: number) {
        this._balance -= amount;
    }

    get accountInfo() : AccountInfo<string, number> {
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

} 
