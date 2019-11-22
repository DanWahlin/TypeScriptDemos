"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checking_account_1 = require("./scripts/checking-account");
var renderer_1 = require("./scripts/renderer");
var savings_account_1 = require("./scripts/savings-account");
var enums_1 = require("./scripts/enums");
var account_list_1 = require("./scripts/account-list");
var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
        // Create CheckingAccount instance
        this.checkingAccount = new checking_account_1.CheckingAccount({
            id: 1,
            title: 'Jane Doe Checking',
            balance: 5000
        });
        this.savingsAccount = new savings_account_1.SavingsAccount({
            id: 100,
            title: 'Jane Doe Savings',
            balance: 10000,
            interestRate: 2.5
        });
        var html = this.renderAccounts();
        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />' + html);
    }
    Main.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accList = new account_list_1.AccountList();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = enums_1.AccountType[account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                this.currentAccount.deposit(amount);
            }
            else {
                this.currentAccount.withdrawal(amount);
            }
        }
        catch (e) {
            error = e;
        }
        this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new renderer_1.Renderer(document.querySelector('#viewTemplate'));
var main = new Main(renderer);
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;
//# sourceMappingURL=main.js.map