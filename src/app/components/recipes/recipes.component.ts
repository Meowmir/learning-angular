import { Component } from "@angular/core";
import { Recipe } from "./recipe";
import {RecipeService} from "./recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrl: "./recipes.component.css",
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe: Recipe;
}
