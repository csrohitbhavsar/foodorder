import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../services/food/foodservice.service';
import { foods } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:foods;

  constructor(private activatedRoute : ActivatedRoute , private foodservices : FoodserviceService) {
    activatedRoute.params.subscribe((params)=> {
      if (params['id'])
      this.food = foodservices.getfoodbyId(params['id'])
    })

   }

  ngOnInit(): void {
  }

}
