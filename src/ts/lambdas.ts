var Timer = function() {
    this.start = document.getElementById('startButton');
    this.stop = document.getElementById('stopButton');
    this.timer = document.getElementById('timer');
    this.timerId = null;
    this.value = 0;

    //With lambda (this will be correct)
    this.start.addEventListener('click',() => this.updateTimer());  

    //Without lambda (this will be button which isn't correct)
    //this.start.addEventListener('click', this.updateTimer); 

    this.stop.addEventListener('click', () => this.stopTimer());
};

//Using standard JavaScript prototype pattern here rather than TypeScript classes 
//(they haven't been covered yet)

Timer.prototype = {
    updateTimer: function () {
        //Catch 'this' errors
        try {     
            this.start.disabled = true;
            this.timerId = window.setInterval(() => this.timer.innerHTML = this.value++, 1000);
        }
        catch (exp) {
            alert(exp);
        }
    },
    stopTimer: function () {
        this.start.disabled = false;
        window.clearInterval(this.timerId);
        this.value = 0;
        this.timer.innerHTML = 0;
    }
};

var timer = new Timer();

