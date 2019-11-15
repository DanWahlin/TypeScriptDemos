import { DepositWithdrawal } from './interfaces';
import { BankAccount } from './bank-account';

export class ATM implements DepositWithdrawal {

    constructor(private account: BankAccount) { }

    deposit(amount: number): void {
        this.account.deposit(amount);
    }    
    
    withdrawal(amount: number): void {
        this.account.withdrawal(amount);
    }
} 