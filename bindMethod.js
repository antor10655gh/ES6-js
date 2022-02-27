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

const bindResult = user1.cost.bind(user2);
user1.cost(500);
bindResult(500);