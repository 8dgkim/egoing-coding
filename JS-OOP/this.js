var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
}

// console.log(kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second) = ", kim.sum());
console.log("kim.sum(this.first, this.second) = ", kim.sum());