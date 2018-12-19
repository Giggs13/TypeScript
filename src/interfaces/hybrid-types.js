function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
