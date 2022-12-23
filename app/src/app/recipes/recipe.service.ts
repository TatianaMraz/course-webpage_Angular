import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'first recipe', 
            'recipe description', 
            '../../../assets/img/1.png',
            [
                new Ingredient('meat', 1),
                new Ingredient('tomatoes', 10),
            ]
        ),
        new Recipe(            
            'first recipe', 
            'recipe description', 
            '../../../assets/img/2.png',
            [
                new Ingredient('buns', 2),
                new Ingredient('apples', 20),
            ]
        )
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}