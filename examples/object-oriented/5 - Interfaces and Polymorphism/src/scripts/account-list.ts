import { Account } from './interfaces';

export class AccountList { 
    _accountList: Account[] = [];

    add(account: Account) {
        this._accountList.push(account);
    }

    getAccounts(): Account[] {
        return this._accountList;
    }
} 

