import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [];
  selectedDish: Dish = new Dish();
  noDishSelected: Boolean = true;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
      this.dishes = this.dishService.getDishes();
      // this.selectedDish = this.dishes[0];
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
    this.noDishSelected = false;
  }
}
