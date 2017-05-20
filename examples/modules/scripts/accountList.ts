import { IAccount } from './iAccount';

export class AccountList {
    _accountList: IAccount[] = [];

    add(account: IAccount) {
        this._accountList.push(account);
    }

    getAccounts(): IAccount[] {
        return this._accountList;
    }
} 

