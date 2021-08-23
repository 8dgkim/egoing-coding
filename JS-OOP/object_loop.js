var memberArray = ['AAPL', '005930', 'Kyrics'];

console.group('array loop');
var i = 0;
while (i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

var memberObject = {
    uscompany: 'AAPL',
    krcompany: '005930',
    mycompany: 'Kyrics'
}

console.group('object loop');
for (var company in memberObject) {
    console.log(company, memberObject[company]);
}
console.groupEnd('object loop');




