"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var checking_account_1 = require("./scripts/checking-account");
var savings_account_1 = require("./scripts/savings-account");
var account_list_1 = require("./scripts/account-list");
var renderer_1 = require("./scripts/renderer");
var enums_1 = require("./scripts/enums");
var atm_1 = require("./scripts/atm");
var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
    }
    Main.prototype.loadAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('/data.json')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.checkingAccount = new checking_account_1.CheckingAccount(__assign({}, data.checkingAccount));
                        this.savingsAccount = new savings_account_1.SavingsAccount(__assign({}, data.savingsAccount));
                        this.atm = new atm_1.ATM(this.checkingAccount);
                        html = this.renderAccounts();
                        this.renderer.render("\n            <h2>Welcome to Acme Bank!</h2><br />\n            <image src=\"src/images/acmebank.jpg\" height=\"150\">\n            <br /><br />\n            <h5>Your Accounts:</h5><br />\n            " + html + "\n        ");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
            case 'atm':
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAtm = function () {
        var html = "\n                <h3>ATM</h3>\n                <image src=\"src/images/atm.jpg\" height=\"150\">\n                <br /><br />\n                Current Checking Account Balance: $" + this.checkingAccount.balance + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true, true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false, true)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
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
    Main.prototype.renderAccount = function (account) {
        var accountType = enums_1.AccountType[account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <image src=\"src/images/" + accountType.toLowerCase() + ".jpg\" height=\"150\">\n                <br /><br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit, atm) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                if (atm) {
                    this.atm.deposit(amount);
                }
                else {
                    this.currentAccount.deposit(amount);
                }
            }
            else {
                if (atm) {
                    this.atm.withdrawal(amount);
                }
                else {
                    this.currentAccount.withdrawal(amount);
                }
            }
        }
        catch (e) {
            error = e;
        }
        (atm) ? this.renderAtm() : this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new renderer_1.Renderer(document.querySelector('#viewTemplate'));
var main = new Main(renderer);
main.loadAccounts();
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but this gets the job done for this demo.
window.main = main;
//# sourceMappingURL=main.js.map