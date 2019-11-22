export class Renderer {
    // instance way
    // constructor(private viewTemplate: HTMLDivElement) {
    //     this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    // }

    // render(html: string) {
    //     this.viewTemplate.innerHTML = html;
    // }

    private constructor() { }

    // static way
    static viewTemplate: HTMLDivElement;

    static render(html: string) {
        Renderer.viewTemplate.innerHTML = html; 
    }
}