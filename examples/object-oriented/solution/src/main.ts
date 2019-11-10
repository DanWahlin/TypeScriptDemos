import { CheckingAccount } from './scripts/checking-account';
import { SavingsAccount } from './scripts/savings-account';
import { AccountList } from './scripts/account-list';
import { BankingAccount } from './scripts/bank-account';
import { Renderer } from './scripts/renderer';
import { AccountType } from './scripts/enums';

class Main {
    checkingAccount: CheckingAccount;
    savingsAccount: SavingsAccount;
    currentAccount: BankingAccount;

    constructor(private renderer: Renderer) { }

    async loadAccounts() {
        const response = await fetch('/data.json');
        const data = await response.json();
        this.checkingAccount = new CheckingAccount({ ...data.checkingAccount });
        this.savingsAccount = new SavingsAccount({ ...data.savingsAccount });
        let html = this.renderAccounts();
        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />' + html);
    }

    changeView(view?: string) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
        }
        this.renderAccount(this.currentAccount);
    }
    
    renderAccounts() {
        let acctsHtml: string = '';       
        const accList = new AccountList();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);

        accList.getAccounts().forEach((acct, index) => {  
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    }


    renderAccount(account: BankingAccount) {
        const accountType = AccountType[account.accountType];
        const html = `
                <h3>${accountType} Account</h3>
                <br />
                <span class="label">Owner:</span> ${account.title}
                <br />
                <span class="label">Balance:</span> $${account.balance.toFixed(2)}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false)">Withdrawal</button>&nbsp;
            `;
        this.renderer.render(html);
    }

    depositWithDrawal(deposit: boolean) {
        let amountInput: HTMLInputElement = document.querySelector('#depositWithdrawalAmount');
        let amount = +amountInput.value;
        if (deposit) {
            this.currentAccount.deposit(amount);
        }
        else {
            this.currentAccount.widthdrawal(amount);
        }
        this.renderAccount(this.currentAccount);

    }
}

// Create main object and add handlers for it
const renderer = new Renderer(document.querySelector('#viewTemplate'));
const main = new Main(renderer);
main.loadAccounts();

// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but this gets the job done for this demo.
(<any>window).main = main;

