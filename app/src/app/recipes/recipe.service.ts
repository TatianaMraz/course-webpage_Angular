import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('first recipe', 'recipe description', '../../../assets/img/1.png'),
        new Recipe('second recipe', 'recipe description', '../../../assets/img/2.png')
    ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}