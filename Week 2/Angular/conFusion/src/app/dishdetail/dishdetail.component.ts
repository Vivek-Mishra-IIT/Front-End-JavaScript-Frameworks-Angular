// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
// for history saving so that easily go back
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    // @Input()
    // dish: Dish = new Dish();
    dish: Dish = new Dish();

    // We need route and location services also
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }
  
    ngOnInit() : void {
      const id = this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDish(id);
    }

    goBack(): void {
      this.location.back();
    }
}
