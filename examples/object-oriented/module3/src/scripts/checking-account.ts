export class CheckingAccount {
    private _balance = 0;

    constructor(public title: string) { }

    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        this._balance = val;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    widthdrawal(amount: number) {
        this._balance -= amount;
    }
}