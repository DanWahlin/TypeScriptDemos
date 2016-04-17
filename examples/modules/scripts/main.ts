import { CheckingAccount } from './checkingAccount';
import { SavingsAccount } from './savingsAccount';
import { AccountList } from './accountList';

class Bootstrapper {
    
    $(selector: string) {
        return document.querySelector(selector);
    }
    
    renderAccounts() {
        let acctsHtml: string = '';
        const accountsDiv = this.$('#accounts');
        const checkingAcct = new CheckingAccount('Jane Doe Checking');
        const savingsAcct = new SavingsAccount('Jane Doe Savings', 2);
        
        const accList = new AccountList();
        accList.add(checkingAcct);
        accList.add(savingsAcct);

        accList.getAccounts().forEach((acct, index) => {  
            acctsHtml += acct.title + '<br />';
        });
        accountsDiv.innerHTML = acctsHtml;
    }


    renderChecking() {
        const account = new CheckingAccount('Jane Doe Checking');
        account.deposit(1000);
        account.widthdrawal(500);
        const div = this.$('#checking').innerHTML = '$' + account.balance.toFixed(2);
    }

    renderSavings() {
        const savings = new SavingsAccount('Jane Doe', 2.5);
        savings.deposit(1000);
        savings.addInterest();
        const savingsDiv = this.$('#savings').innerHTML = '$' + 
                           savings.balance.toFixed(2) + 
                           ' (after interest added)';
    }
}

const bootstrapper = new Bootstrapper();
bootstrapper.renderAccounts();
bootstrapper.renderChecking();
bootstrapper.renderSavings();