
class AccountList {
    _accountList: IAccount[] = [];

    add(account: IAccount) {
        this._accountList.push(account);
    }

    getAccounts(): IAccount[] {
        return this._accountList;
    }
} 

var acctsHtml: string = '';
var accountsDiv = $('#accounts');
var checkingAcct = new CheckingAccount('Jane Doe Checking');
var savingsAcct = new SavingsAccount('Jane Doe Savings', 2);

var accList = new AccountList();
accList.add(checkingAcct);
accList.add(savingsAcct);

accList.getAccounts().forEach((acct, index) => {  
    acctsHtml += acct.title + '<br />';
});
accountsDiv.html(acctsHtml);

