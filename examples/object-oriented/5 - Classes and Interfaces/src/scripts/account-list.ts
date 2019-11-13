import { BankAccount } from './bank-account';

export class AccountList { 
    _accountList: BankAccount[] = [];

    add(account: BankAccount) {
        this._accountList.push(account);
    }

    getAccounts(): BankAccount[] {
        return this._accountList;
    }
} 

