import { Component, OnInit } from '@angular/core';
import{ingredient} from'../Shared/ingredient.model'
import { ShoppinglistService } from './shoppinglist.service';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients:ingredient[];
  constructor(private shoppinglistservice:ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppinglistservice.getingredient();
    this.shoppinglistservice.ingredientschanged.subscribe(
      (ingredients:ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }



}
