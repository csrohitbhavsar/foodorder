import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart'
import { foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  addToCart(food: foods): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }       
    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId: number) {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(quanity: number, foodId: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if (!cartItem) {
      return
    }
    cartItem.quantity = quanity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
