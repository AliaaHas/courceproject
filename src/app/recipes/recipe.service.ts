import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from '../Shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist/shoppinglist.service';
import { recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
recipeselected=new EventEmitter<recipe>();
  constructor(private slservice:ShoppinglistService) { }

 private recipes:recipe[]=[
    new recipe('FirstTestRecipe','this is a testrecipe','https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540',
    [
      new ingredient('meat',1),
      new ingredient('fries',30)
    ]),
    new recipe ('SecondTestRecipe','this is a testrecipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuTjc9XSl3E4JANPbnh9BqBI125Ahyf50Sw&usqp=CAU',
    [
      new ingredient('meat',1),
      new ingredient('fries',30)
    ]),
    new recipe ('ThirdTestRecipe','this is a testrecipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Yn9iiIjocVI75jeSbViWFgJXHPHiK8w0zg&usqp=CAU',
    [
      new ingredient('meat',1),
      new ingredient('fries',30)
    ]),
    new recipe ('ForthTestRecipe','this is a testrecipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNV7SmPWdcB9ckdN2dRrNX4phNohvkuNERw&usqp=CAU',
    [
      new ingredient('meat',1),
      new ingredient('fries',30)
    ]),

  ];
  getrecipes(){
   return this.recipes.slice();
  }

  addingredientstoshoppinglist(ingredient:ingredient[]){
    this.slservice.addingredients(ingredient);


  }
}
