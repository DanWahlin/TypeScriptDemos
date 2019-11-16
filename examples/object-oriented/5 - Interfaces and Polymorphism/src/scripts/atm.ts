import { DepositWithdrawal, Account } from './interfaces';

export class ATM implements DepositWithdrawal {

    constructor(private account: Account) { }

    deposit(amount: number) {
        this.account.deposit(amount);
    }    
    
    withdrawal(amount: number) {
        this.account.withdrawal(amount);
    }
} 