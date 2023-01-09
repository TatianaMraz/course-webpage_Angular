import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'first recipe', 
            'first recipe description', 
            '../../../assets/img/1.png',
            [
                new Ingredient('meat', 1),
                new Ingredient('tomatoes', 10),
            ]
        ),
        new Recipe(            
            'second recipe', 
            'second recipe description', 
            '../../../assets/img/2.png',
            [
                new Ingredient('buns', 2),
                new Ingredient('apples', 20),
            ]
        )
    ];
    
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}