export class Renderer {
    constructor(private viewTemplate: HTMLDivElement) {
        this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    }

    render(html: string) {
        this.viewTemplate.innerHTML = html;
    }

    renderError(message: string) {
        this.viewTemplate.innerHTML += `<br /><br /><div class="alert alert-danger">${message}</div>`;
    }
}