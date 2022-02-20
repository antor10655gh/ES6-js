const  products = [
    {name: 'Realme 8 Pro', storage: '128GB', battery: '4500mAh', ram: '8GB', price: '27990'},
    {name: 'Samsung J7', storage: '64GB', battery: '3500mAh', ram: '3GB', price: '23990'},
    {name: 'Vivo V21', storage: '128GB', battery: '5000mAh', ram: '3GB', price: '20990'},
    {name: 'Oppo Reno 6', storage: '128GB', battery: '5000mAh', ram: '6GB', price: '26990'},
    {name: 'Redmi 10', storage: '64GB', battery: '4500mAh', ram: '4GB', price: '14990'},
];

const productSearch = products.map(product => product.price);
console.log(productSearch);