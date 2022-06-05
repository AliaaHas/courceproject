import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements OnInit {

  recipes:recipe[];

  constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeservice.getrecipes();

  }

}
