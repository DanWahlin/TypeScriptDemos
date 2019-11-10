/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/savings-account */ "./src/scripts/savings-account.ts");
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
var __assign = (undefined && undefined.__assign) || function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
                        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["CheckingAccount"](__assign({}, data.checkingAccount));
                        this.savingsAccount = new _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__["SavingsAccount"](__assign({}, data.savingsAccount));
                        html = this.renderAccounts();
                        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />' + html);
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
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__["AccountList"]();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_4__["AccountType"][account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        if (deposit) {
            this.currentAccount.deposit(amount);
        }
        else {
            this.currentAccount.widthdrawal(amount);
        }
        this.renderAccount(this.currentAccount);
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](document.querySelector('#viewTemplate'));
var main = new Main(renderer);
main.loadAccounts();
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;


/***/ }),

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
/*! exports provided: AccountList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountList", function() { return AccountList; });
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());



/***/ }),

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
/*! exports provided: BankingAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankingAccount", function() { return BankingAccount; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.ts");

var BankingAccount = /** @class */ (function () {
    function BankingAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    BankingAccount.prototype.deposit = function (amount) {
        this._balance += amount;
    };
    BankingAccount.prototype.widthdrawal = function (amount) {
        this._balance -= amount;
    };
    Object.defineProperty(BankingAccount.prototype, "accountInfo", {
        get: function () {
            return {
                routingNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROUTING_NUMBER,
                bankNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].BANK_NUMBER
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankingAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
        },
        enumerable: true,
        configurable: true
    });
    return BankingAccount;
}());



/***/ }),

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/*! exports provided: CheckingAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingAccount", function() { return CheckingAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Checking;
        return _this;
    }
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankingAccount"]));



/***/ }),

/***/ "./src/scripts/constants.ts":
/*!**********************************!*\
  !*** ./src/scripts/constants.ts ***!
  \**********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () { return '1231A4433Y2'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () { return 100008374; },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());



/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Checking"] = 0] = "Checking";
    AccountType[AccountType["Savings"] = 1] = "Savings";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    return Renderer;
}());



/***/ }),

/***/ "./src/scripts/savings-account.ts":
/*!****************************************!*\
  !*** ./src/scripts/savings-account.ts ***!
  \****************************************/
/*! exports provided: SavingsAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsAccount", function() { return SavingsAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Savings;
        _this._interestRate = accountSettings.interestRate;
        // Simulate interest over time
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    };
    return SavingsAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankingAccount"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JhbmstYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jaGVja2luZy1hY2NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zYXZpbmdzLWFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUitDO0FBQ1Y7QUFJdEM7SUFBb0Msa0NBQWM7SUFJOUMsd0JBQVksZUFBZ0M7UUFBNUMsWUFDSSxrQkFBTSxlQUFlLENBQUMsU0FPekI7UUFWRCxpQkFBVyxHQUFHLGtEQUFXLENBQUMsT0FBTyxDQUFDO1FBSTlCLEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUVsRCw4QkFBOEI7UUFDOUIsV0FBVyxDQUFDO1lBQ1IsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFDZCxDQUFDO0lBRU8sb0NBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0FqQm1DLDREQUFjLEdBaUJqRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgQ2hlY2tpbmdBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL2NoZWNraW5nLWFjY291bnQnO1xuaW1wb3J0IHsgU2F2aW5nc0FjY291bnQgfSBmcm9tICcuL3NjcmlwdHMvc2F2aW5ncy1hY2NvdW50JztcbmltcG9ydCB7IEFjY291bnRMaXN0IH0gZnJvbSAnLi9zY3JpcHRzL2FjY291bnQtbGlzdCc7XG5pbXBvcnQgeyBCYW5raW5nQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9iYW5rLWFjY291bnQnO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL3NjcmlwdHMvZW51bXMnO1xuXG5jbGFzcyBNYWluIHtcbiAgICBjaGVja2luZ0FjY291bnQ6IENoZWNraW5nQWNjb3VudDtcbiAgICBzYXZpbmdzQWNjb3VudDogU2F2aW5nc0FjY291bnQ7XG4gICAgY3VycmVudEFjY291bnQ6IEJhbmtpbmdBY2NvdW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHsgfVxuXG4gICAgYXN5bmMgbG9hZEFjY291bnRzKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZGF0YS5qc29uJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCh7IC4uLmRhdGEuY2hlY2tpbmdBY2NvdW50IH0pO1xuICAgICAgICB0aGlzLnNhdmluZ3NBY2NvdW50ID0gbmV3IFNhdmluZ3NBY2NvdW50KHsgLi4uZGF0YS5zYXZpbmdzQWNjb3VudCB9KTtcbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLnJlbmRlckFjY291bnRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCc8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPicgKyBodG1sKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VWaWV3KHZpZXc/OiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja2luZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuY2hlY2tpbmdBY2NvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2F2aW5ncyc6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuc2F2aW5nc0FjY291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXJBY2NvdW50cygpIHtcbiAgICAgICAgbGV0IGFjY3RzSHRtbDogc3RyaW5nID0gJyc7ICAgICAgIFxuICAgICAgICBjb25zdCBhY2NMaXN0ID0gbmV3IEFjY291bnRMaXN0KCk7XG4gICAgICAgIGFjY0xpc3QuYWRkKHRoaXMuY2hlY2tpbmdBY2NvdW50KTtcbiAgICAgICAgYWNjTGlzdC5hZGQodGhpcy5zYXZpbmdzQWNjb3VudCk7XG5cbiAgICAgICAgYWNjTGlzdC5nZXRBY2NvdW50cygpLmZvckVhY2goKGFjY3QsIGluZGV4KSA9PiB7ICBcbiAgICAgICAgICAgIGFjY3RzSHRtbCArPSBhY2N0LnRpdGxlICsgJzxiciAvPic7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWNjdHNIdG1sO1xuICAgIH1cblxuXG4gICAgcmVuZGVyQWNjb3VudChhY2NvdW50OiBCYW5raW5nQWNjb3VudCkge1xuICAgICAgICBjb25zdCBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlW2FjY291bnQuYWNjb3VudFR5cGVdO1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgIDxoMz4ke2FjY291bnRUeXBlfSBBY2NvdW50PC9oMz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+T3duZXI6PC9zcGFuPiAke2FjY291bnQudGl0bGV9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkJhbGFuY2U6PC9zcGFuPiAkJHthY2NvdW50LmJhbGFuY2UudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAkPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSlcIj5EZXBvc2l0PC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbChmYWxzZSlcIj5XaXRoZHJhd2FsPC9idXR0b24+Jm5ic3A7XG4gICAgICAgICAgICBgO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgICB9XG5cbiAgICBkZXBvc2l0V2l0aERyYXdhbChkZXBvc2l0OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBhbW91bnRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXBvc2l0V2l0aGRyYXdhbEFtb3VudCcpO1xuICAgICAgICBsZXQgYW1vdW50ID0gK2Ftb3VudElucHV0LnZhbHVlO1xuICAgICAgICBpZiAoZGVwb3NpdCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC5kZXBvc2l0KGFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LndpZHRoZHJhd2FsKGFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpO1xuXG4gICAgfVxufVxuXG4vLyBDcmVhdGUgbWFpbiBvYmplY3QgYW5kIGFkZCBoYW5kbGVycyBmb3IgaXRcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3VGVtcGxhdGUnKSk7XG5jb25zdCBtYWluID0gbmV3IE1haW4ocmVuZGVyZXIpO1xubWFpbi5sb2FkQWNjb3VudHMoKTtcblxuLy8gUXVpY2sgYW5kIGVhc3kgd2F5IHRvIGV4cG9zZSBhIGdsb2JhbCBBUEkgdGhhdCBjYW4gaG9vayB0byB0aGUgTWFpbiBvYmplY3Rcbi8vIHNvIHRoYXQgd2UgY2FuIGdldCB0byBpdCBmcm9tIGNsaWNrIGFuZCBldmVudHMgYW5kIG90aGVycy5cbi8vIFllcywgdGhlcmUgYXJlIG90aGVyIHdheXMgYnV0IHRoYXQncyBub3QgdGhlIGZvY3VzIG9mIHRoaXMgZGVtb1xuKDxhbnk+d2luZG93KS5tYWluID0gbWFpbjtcblxuIiwiaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3VudExpc3QgeyBcclxuICAgIF9hY2NvdW50TGlzdDogQWNjb3VudFtdID0gW107XHJcblxyXG4gICAgYWRkKGFjY291bnQ6IEFjY291bnQpIHtcclxuICAgICAgICB0aGlzLl9hY2NvdW50TGlzdC5wdXNoKGFjY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjY291bnRzKCk6IEFjY291bnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjY291bnRMaXN0O1xyXG4gICAgfVxyXG59IFxyXG5cclxuIiwiaW1wb3J0IHsgQWNjb3VudCwgQWNjb3VudEluZm8sIEFjY291bnRTZXR0aW5ncyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYW5raW5nQWNjb3VudCBpbXBsZW1lbnRzIEFjY291bnQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9iYWxhbmNlID0gMDtcclxuICAgIGFic3RyYWN0IGFjY291bnRUeXBlOiBBY2NvdW50VHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBhY2NvdW50U2V0dGluZ3MuaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGFjY291bnRTZXR0aW5ncy50aXRsZTtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSBhY2NvdW50U2V0dGluZ3MuYmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXBvc2l0KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYmFsYW5jZSArPSBhbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgd2lkdGhkcmF3YWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9iYWxhbmNlIC09IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWNjb3VudEluZm8oKSA6IEFjY291bnRJbmZvPHN0cmluZywgbnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcm91dGluZ051bWJlcjogQ29uc3RhbnRzLlJPVVRJTkdfTlVNQkVSLFxyXG4gICAgICAgICAgICBiYW5rTnVtYmVyOiBDb25zdGFudHMuQkFOS19OVU1CRVJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhbGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhbGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJhbGFuY2UodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9iYWxhbmNlID0gdmFsO1xyXG4gICAgfVxyXG5cclxufSBcclxuIiwiaW1wb3J0IHsgQmFua2luZ0FjY291bnQgfSBmcm9tICcuL2JhbmstYWNjb3VudCc7XHJcbmltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSAnLi9lbnVtcyc7XHJcbmltcG9ydCB7IEFjY291bnRTZXR0aW5ncyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tpbmdBY2NvdW50IGV4dGVuZHMgQmFua2luZ0FjY291bnQge1xyXG5cclxuICAgIGFjY291bnRUeXBlID0gQWNjb3VudFR5cGUuQ2hlY2tpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBBY2NvdW50U2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xyXG4gICAgfVxyXG59ICIsImV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG4gICAgc3RhdGljIGdldCBST1VUSU5HX05VTUJFUigpOiBzdHJpbmcgeyByZXR1cm4gJzEyMzFBNDQzM1kyJzsgfVxyXG4gICAgc3RhdGljIGdldCBCQU5LX05VTUJFUigpOiBudW1iZXIgeyByZXR1cm4gMTAwMDA4Mzc0OyB9XHJcbn0iLCJleHBvcnQgZW51bSBBY2NvdW50VHlwZSB7XG4gICAgQ2hlY2tpbmcsXG4gICAgU2F2aW5nc1xufSIsImV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCA9ICc8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz48aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPic7XG4gICAgfVxuXG4gICAgcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYW5raW5nQWNjb3VudCB9IGZyb20gJy4vYmFuay1hY2NvdW50JztcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tICcuL2VudW1zJztcclxuaW1wb3J0IHsgQWNjb3VudFNldHRpbmdzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2F2aW5nc0FjY291bnQgZXh0ZW5kcyBCYW5raW5nQWNjb3VudCB7XHJcbiAgICBwcml2YXRlIF9pbnRlcmVzdFJhdGU6IG51bWJlcjtcclxuICAgIGFjY291bnRUeXBlID0gQWNjb3VudFR5cGUuU2F2aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xyXG4gICAgICAgIHN1cGVyKGFjY291bnRTZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJlc3RSYXRlID0gYWNjb3VudFNldHRpbmdzLmludGVyZXN0UmF0ZTtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgaW50ZXJlc3Qgb3ZlciB0aW1lXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEludGVyZXN0KCk7XHJcbiAgICAgICAgfSwgNjAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkSW50ZXJlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gdGhpcy5iYWxhbmNlICsgKHRoaXMuYmFsYW5jZSAqICh0aGlzLl9pbnRlcmVzdFJhdGUgLyAxMDApKTtcclxuICAgIH1cclxufSBcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=