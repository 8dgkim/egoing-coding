var superObj = {superVal: 'super'}
// var subObj = {subVal: 'sub'}
// subObj.__proto__ = superObj;

var subObj = Object.create(superObj);
subObj.subVal = 'sub';

// debugger;

console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);

subObj.superVal = 'sub'; // 상속받은 object의 속성을 바꿈.

console.log('subObj.superVal => ', subObj.superVal); // subObj는 바뀐대로 sub 출력. 
console.log('superObj.superVal => ', superObj.superVal); // 그런데 superObj는 그대로 super 출력.


var kim = {
    name: 'kim',
    first: 10, second: 20,
    sum: function() {
        return this.first + this.second;
    }
}
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
    return (this.first + this.second) / 2;
} // 예제니까 이렇게 하긴 하는데, 너무 dirty 하다는 느낌이 드는군.
// var lee = {
//     name: 'lee',
//     first: 10, second: 10,
//     avg: function() {
//         return (this.first + this.second) / 2;
//     }
// }
// lee.__proto__ = kim;

console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());