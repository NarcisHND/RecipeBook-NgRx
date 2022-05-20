import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Rita rowdy',
  //     "It's a delicacy!",
  //     'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg',
  //     [new Ingredient('Meat', 2), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Bolani With Tomato Chutney and Doogh',
  //     "It's a delicacy!",
  //     'https://cdn.vox-cdn.com/thumbor/THUOalGkrq--bL1dUwkcrR84jSA=/0x0:6240x4160/1200x800/filters:focal(2621x1581:3619x2579)/cdn.vox-cdn.com/uploads/chorus_image/image/70739661/VICTA_EATER_AT_HOME_POTATO___CHIVE_BOLANI__2.0.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 3)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
