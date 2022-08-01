import { foods } from "./food";

export class    CartItem {
    price!: number;
    constructor (food : foods) {
        this.food = food;
        this.Price;
    }

    food : foods;
    quantity : number = 1;
    
    get Price() : Number {
        return this.food.price * this.quantity;
    }
}