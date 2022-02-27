const user1 = {
    id: 101,
    userName: 'kalam',
    money: 5000,

    cost: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
};

const user2 = {
    id: 102,
    userName: 'Balam',
    money: 6000
}

const user3 = {
    id: 102,
    userName: 'Salam',
    money: 7000
}


user1.cost.call(user2, 500);
user1.cost.apply(user3, [500]);