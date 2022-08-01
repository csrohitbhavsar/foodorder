import { Component, Input, OnInit } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { tag } from '../shared/models/tag'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetag ?: string[]
    tags : tag[] = [];
  constructor(private fs : FoodserviceService) { }
  

  ngOnInit(): void {
    if (!this.foodPagetag)
    this.tags = this.fs.getallTags();
  }

}
