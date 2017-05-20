
class CheckingAccount extends BankingAccount {
    constructor(title: string) {
        super(title);
    }
} 

var account = new CheckingAccount('Jane Doe Checking');
account.deposit(1000);
account.widthdrawal(500);
var div = $('#checking');
div.html('$' + account.balance.toFixed(2));