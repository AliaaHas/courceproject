import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedrecipe:recipe;
  constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {
    this.recipeservice.recipeselected.subscribe(
      (recipe:recipe)=>{
        this.selectedrecipe=recipe;
      }
    );
  }

}
