console.log("Math.PI = ", Math.PI);
console.log("Math.random() = ", Math.random()); // method = function in an object
console.log("Math.floor(3.9) = ", Math.floor(3.9));

var MyMath = {
    PI: Math.PI,
    random: function() {
        return Math.random();
    },
    floor: function(val) {
        return Math.floor(val);
    }
}
console.log("MyMath.PI = ", MyMath.PI);
console.log("MyMath.random() = ", MyMath.random());
console.log("MyMath.floor(3.9) = ", MyMath.floor(3.9));

