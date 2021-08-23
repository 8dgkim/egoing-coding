var memberArray = ['AAPL', '005930', 'Kyrics'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    usstock: 'AAPL',
    krstock: '005930',
    mycompany: 'Kyrics'
}
memberObject.mycompany = 'Oruda';

console.log("memberObject.mycompany", memberObject.mycompany);
console.log("memberObject.mycompany", memberObject['mycompany']);

delete memberObject.usstock
console.log('after delete memberObject.usstock', memberObject.usstock);

