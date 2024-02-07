import {RecipeModel} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>()

  private recipes: RecipeModel[] = [
    new RecipeModel(
      "Christmas Raisin Scones",
      "Holiday Raisin Scones can actually be made with any toppings (savory or sweet) in place of raisins. When baked, the scone will be rich! Holiday raisin cake is an ideal addition to the Christmas table. Find out how it is prepared!",
      "https://www.slobodenpecat.mk/wp-content/uploads/2024/01/%D0%B1%D0%BE%D0%B6%D0%B8%D1%9C%D0%BD%D0%B0-%D0%BF%D0%BE%D0%B3%D0%B0%D1%87%D0%B0-%D1%81%D0%BE-%D1%81%D1%83%D0%B2%D0%BE-%D0%B3%D1%80%D0%BE%D0%B7%D1%98%D0%B5-%D0%A4%D0%BE%D1%82%D0%BE-Rawpixel.webp",
      [
        new Ingredient('Flour', 38),
        new Ingredient('Sugar', 8)
      ]
      ),
    new RecipeModel(
      "Simple Crusty White Bread",
      "Baking a crusty loaf of country-style white bread at home is made simple with a Dutch oven and digital scale.",
      "https://www.seriouseats.com/thmb/LoXQL7Yp_uXxtipH8cCp_LGVg5E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__08__20140810-workhorse-bread-vicky-wasik-3-3a86ee51da2e4a7b8239ceb62d8d8d17.jpg",
      [
        new Ingredient('Flour', 1),
        new Ingredient('Water', 7)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}
