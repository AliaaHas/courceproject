import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from '../Shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientschanged=new EventEmitter<ingredient[]>();

 private ingredients:ingredient[]=[
    new ingredient('Appels',5),
    new ingredient('Orange',6),
  ];
  constructor() { }

  getingredient(){
    return this.ingredients.slice();
  }
  ingredientadded(ingredient:ingredient){
    this.ingredients.push(ingredient);
    this.ingredientschanged.emit(this.ingredients.slice());

  }
  addingredients(ingredients:ingredient[]){

    // for(let ingredient of ingredients){
    //   this.ingredientadded(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientschanged.emit(this.ingredients.slice());
  }
}
