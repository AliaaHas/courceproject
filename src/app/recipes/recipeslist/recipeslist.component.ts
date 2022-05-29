import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements OnInit {

  // recipes:recipe[]=[
  //   new recipe('TestRecipe')
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
