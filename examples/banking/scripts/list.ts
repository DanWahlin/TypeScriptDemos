
class ListOfNumbers {
    _items: number[] = [];

    add(item: number) {
        this._items.push(item);
    }

    getItems(): number[] {
        return this._items;
    }
}

class ListOfString {
    _items: string[] = [];

    add(item: string) {
        this._items.push(item);
    }

    getItems(): string[] {
        return this._items;
    }
} 

//Generic list
//With constraint
//class List<T extends IAccount> {
class List<T> {
    _items: T[] = [];

    add(item: T) {
        this._items.push(item);
    }

    getItems(): T[] {
        return this._items;
    }
} 

//Constrain <T> to a type that implements IAccount
class ListWithConstraint<T extends IAccount> {
    _items: T[] = [];

    add(item: T) {
        this._items.push(item);
    }

    getItems(): T[] {
        return this._items;
    }
} 

var acctsHtml: string = '';
var accountsDiv = $('#accounts');
var checkingAcct = new CheckingAccount('Jane Doe Checking');
var savingsAcct = new SavingsAccount('Jane Doe Savings', 2);

var accountList = new List<IAccount>();
accountList.add(checkingAcct);
accountList.add(savingsAcct);

accountList.getItems().forEach((acct, index) => {  
    acctsHtml += acct.title + '<br />';
});
accountsDiv.html(acctsHtml);


