interface IAccountInfo<TRouteNumber, TBankNumber> {
    routingNumber: TRouteNumber;
    bankNumber: TBankNumber;
}

interface IDepositWithdrawal {
    deposit(amount: number): void; 
    widthdrawal(amount: number): number;
}

interface IAccount extends IDepositWithdrawal {    
    accountInfo: IAccountInfo<string, number>; 
    balance : number;         
    title: string;    
    internalId?: number;    
}


