import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  getfoodbyId(id : number) : foods {
    return this.getall().find(food => food.id == id)!;
  }

  getallByTag( tag : string) : foods[]{
    if (tag == 'All')
    return this.getall()
    else
    return this.getall().filter(food => food.tags?.includes(tag))
  }

  getallTags():tag[] {
    return [
      {name : 'All' , count : 15},
      {name : 'italian', count : 1},
      {name : 'spicy' , count : 8},
      {name : 'indian' , count : 1},
      {name : 'dry' , count : 2},
      {name : 'cheesy' , count : 2},
      {name : 'fried' , count : 1} ];
  }

  getall() : foods[]{
    return [
      {
        id : 1,
        price : 450,
        name : 'cheesy spicy Pizza',
        fav : true,
        star: 4,
        tags : ['italian' , 'spicy'],
        imageurl: '/assets/images/food-1.jpg',
        cookTime: '20-30',
        origins : ['itly' , 'india']
      },
      {
        id : 2,
        price : 50,
        name : 'Veg Dry Bhel',
        fav : false,
        star: 3,
        tags : ['indian' , 'spicy'],
        imageurl: '/assets/images/food-2.jpg',
        cookTime: '10-15',
        origins : ['india']
      },
      {
        id : 3,
        price : 150,
        name : 'Meat Balls',
        fav : false,
        star: 3.4,
        tags : ['dry' , 'spicy'],
        imageurl: '/assets/images/food-3.jpg',
        cookTime: '25-30',
        origins : ['india' , 'Chaina']
      },
      {
        id : 4,
        price : 200,
        name : 'cheese Fries',
        fav : true,
        star: 4.5,
        tags : ['cheesy' , 'spicy' , 'fried'],
        imageurl: '/assets/images/food-4.jpg',
        cookTime: '25-30',
        origins : ['canada' , 'spain']
      },
      {
        id : 5,
        price : 350,
        name : 'Manchurian Noodles',
        fav : true,
        star: 4.9,
        tags : ['spicy' , 'dry'],
        imageurl: '/assets/images/food-5.jpg',
        cookTime: '20-25',
        origins : ['india' , 'china']
      },
      {
        id : 6,
        price : 300,
        name : 'White Sause Pasta',
        fav : false,
        star: 3.9,
        tags : ['spicy' , 'cheesy'],
        imageurl: '/assets/images/food-6.jpg',
        cookTime: '30-35',
        origins : ['india' , 'itly']
      },
      {
        id : 7,
        price : 25,
        name : 'Bombay Vadapav',
        fav : true,
        star: 3.5,
        tags : ['spicy'],
        imageurl: '/assets/images/food-7.jpg',
        cookTime: '5-10',
        origins : ['india']
      },
      {
        id : 8,
        price : 100,
        name : 'Noodles',
        fav : true,
        star: 4.0,
        tags : ['spicy'],
        imageurl: '/assets/images/food-8.jpg',
        cookTime: '20-25',
        origins : ['india' , 'china']
      },
      
    ];
  }
}
