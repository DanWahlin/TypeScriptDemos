namespace DefiningClasses {
    class Engine {
        constructor(public horsePower: number, public engineType: string) { }
    }

    class Car {
        private _engine: Engine;

        constructor(engine: Engine) {
            this.engine = engine;
        }

        get engine(): Engine {
            return this._engine;
        }

        set engine(value: Engine) {
            if (value == undefined) throw 'Please supply an engine';
            this._engine = value;
        }

        start(): void {
            render('Car engine started ' + this._engine.engineType);
        }
    }
    
    function render(text: string) {
        document.getElementById('container').innerHTML += text + '<br />';
    }

    window.onload = function () {
        var engine = new Engine(300, 'V8');
        var car = new Car(engine);
        render(car.engine.engineType);
        car.start();
    };
}




