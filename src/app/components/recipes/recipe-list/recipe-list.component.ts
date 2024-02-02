import { Component } from "@angular/core";
import { Recipe } from "../recipe";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrl: "./recipe-list.component.css",
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is simply a test",
      "https://www.slobodenpecat.mk/wp-content/uploads/2024/01/%D0%B1%D0%BE%D0%B6%D0%B8%D1%9C%D0%BD%D0%B0-%D0%BF%D0%BE%D0%B3%D0%B0%D1%87%D0%B0-%D1%81%D0%BE-%D1%81%D1%83%D0%B2%D0%BE-%D0%B3%D1%80%D0%BE%D0%B7%D1%98%D0%B5-%D0%A4%D0%BE%D1%82%D0%BE-Rawpixel.webp",
    ),
    new Recipe(
      "A test recipe",
      "This is simply a test",
      "https://www.slobodenpecat.mk/wp-content/uploads/2024/01/%D0%B1%D0%BE%D0%B6%D0%B8%D1%9C%D0%BD%D0%B0-%D0%BF%D0%BE%D0%B3%D0%B0%D1%87%D0%B0-%D1%81%D0%BE-%D1%81%D1%83%D0%B2%D0%BE-%D0%B3%D1%80%D0%BE%D0%B7%D1%98%D0%B5-%D0%A4%D0%BE%D1%82%D0%BE-Rawpixel.webp",
    ),
  ];
}
