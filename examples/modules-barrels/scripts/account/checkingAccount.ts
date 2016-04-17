/// <reference path="../../typings/jquery.d.ts" />
import { BankingAccount } from './bankingAccount';

export class CheckingAccount extends BankingAccount {
    constructor(title: string) {
        super(title);
    }
} 