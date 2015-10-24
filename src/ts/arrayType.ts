interface AccountArray {
    [index: number]: IAccount;
    length: number;
}

var acctArray: AccountArray;
acctArray = [new CheckingAccount('Checking Account'), new SavingsAccount('Savings Account', 2)];

for (var i = 0; i < acctArray.length; i++) {
    var title = acctArray[i].title;
    console.log(title);
}