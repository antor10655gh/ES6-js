class Car{
    name;
    color;
    price;
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    BrandDetails(){
        console.log('This is', this.name)
    }
}

const bmw = new Car('BMW','White','1Crore');
const toyota = new Car('Toyota', 'Black', '80Lakh');
bmw.BrandDetails();
console.log(bmw);
toyota.BrandDetails();
console.log(toyota);