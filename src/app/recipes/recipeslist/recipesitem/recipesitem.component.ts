import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipesitem',
  templateUrl: './recipesitem.component.html',
  styleUrls: ['./recipesitem.component.css']
})
export class RecipesitemComponent implements OnInit {
  @Input() recipe:recipe;

  constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {

  }
  onselected(){
    this.recipeservice.recipeselected.emit(this.recipe);

  }

}
