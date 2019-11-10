import { BankingAccount } from './bank-account';
import { AccountType } from './enums';
import { AccountSettings } from './interfaces';

export class CheckingAccount extends BankingAccount {

    accountType = AccountType.Checking;

    constructor(accountSettings: AccountSettings) {
        super(accountSettings);
    }
} 