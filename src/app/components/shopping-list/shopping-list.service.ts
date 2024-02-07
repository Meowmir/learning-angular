import {Ingredient} from "../../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient("Cucumber", 1),
    new Ingredient("Tomatoes", 5),
  ];

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient)
    }
  }
}
