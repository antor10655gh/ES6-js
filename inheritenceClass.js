class Mobile{
    name;
    batery;
    price;
    constructor(name, batery, price){
        this.name = name;
        this.batery = batery;
        this.price = price;
    }
    realeseDate(){
        console.log(this.name, 'realse date is 2/4/2022');
    }
}

class Processor extends Mobile{
    processor;
    constructor(name, batery, price, processor){
        super(name,batery,price)
        this.processor = processor;
    }
}

const realmeMobile = new Mobile('Realme 8 Pro', '4500mAh', '27990Taka');
const mobileOne = new Processor('Realme 8 Pro', '4500mAh', '27990Taka','Snapdragon 720G');
console.log(mobileOne);
realmeMobile.realeseDate();