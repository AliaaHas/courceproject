import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipesdetail',
  templateUrl: './recipesdetail.component.html',
  styleUrls: ['./recipesdetail.component.css']
})
export class RecipesdetailComponent implements OnInit {
@Input() recipe:recipe;
  constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {
  }
  onaddtoshoppinglist(){
    this.recipeservice.addingredientstoshoppinglist(this.recipe.ingredients)

  }

}
