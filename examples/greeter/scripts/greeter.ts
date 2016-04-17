interface IMessage {
    greeting: string;
}

interface IGreet {
    greet(msg: IMessage): void;
}   


class Greeter implements IGreet {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    greet(msg: IMessage) {
        this.element.innerHTML = msg.greeting;
    }      
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.greet({ greeting: 'Hello from the Greeter Class!' });
};