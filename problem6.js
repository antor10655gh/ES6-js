const products = [
    {name: 'Pendrive', color: 'Black', price: '500'},
    {name: 'Sunglass', color: 'White', price: '700'},
    {name: 'Watch', color: 'Blue', price: '2000'},
    {name: 'Airbuds', color: 'Gray', price: '1850'},
    {name: 'Speaker', color: 'Black', price: '850'},
    {name: 'Cycle', color: 'Black', price: '5000'},
    {name: 'Pen', color: 'Orange', price: '15'},
];

const result = products.find(product => product.price == 5000);
console.log(result);