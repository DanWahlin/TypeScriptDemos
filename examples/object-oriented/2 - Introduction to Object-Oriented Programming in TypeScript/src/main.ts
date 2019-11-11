// #### Create object using object literal
const objLiteral = {
    balance: 500
};

// #### Create object using a class
class ClassObject {
    balance = 1000;
}
const classObj = new ClassObject();

// #### Create object using a function
function FunctionObject() {
    this.balance = 9000;
}
const functionObj = new FunctionObject();

// #### Create object using Object.create()
const objCreate = Object.create(objLiteral);

const render = function() { 
    const total = objLiteral.balance + classObj.balance + functionObj.balance + objCreate.balance;
    document.querySelector('#viewTemplate').innerHTML = `
        <h2>Welcome to Acme Bank!</h2><br /><h5>Your account balances:</h5><br />
        Object Literal Object Balance: $${objLiteral.balance}
        <br />
        Class Object Balance: $${classObj.balance}
        <br />
        Function Constructor Object Balance: $${functionObj.balance}
        <br />
        Object.create() Object Balance: $${objCreate.balance}

        <br /><br />
        <strong>Total:</strong> $${total}
    `;
}();

