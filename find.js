const laptops = [
    {name: 'Avita Magus Celeron N3350', price: '23,500৳', color: 'blue', size: '12.2"'},
    {name: 'Asus Vivobook X515MA N4020', price: '39,800৳', color: 'black', size: '15.6"'},
    {name: 'Samsung Galaxy Book Pro Core', price: '130,000৳', color: 'black', size: '15.6"'},
    {name: 'Walton Passion BP5800', price: '52,550৳', color: 'gray', size: '15.6"'},
    {name: 'HP 15s-du1117TU Pentium', price: '37,800৳', color: 'silver', size: '15.6"'},
];

const laptopColor = laptops.find(laptop => laptop.color == 'black');
console.log(laptopColor);