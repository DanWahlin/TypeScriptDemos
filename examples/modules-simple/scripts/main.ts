import { BankingAccount } from './bankingAccount';

const ba = new BankingAccount('Checking');
ba.deposit(100);

document.getElementById('balance').innerHTML = ba.balance.toString();
