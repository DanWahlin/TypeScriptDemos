import { BankAccount } from './bank-account';
import { AccountType } from './enums';
import { AccountSettings } from './interfaces';

export class CheckingAccount extends BankAccount {

    accountType = AccountType.Checking;

    constructor(accountSettings: AccountSettings) {
        super(accountSettings);
    }
} 