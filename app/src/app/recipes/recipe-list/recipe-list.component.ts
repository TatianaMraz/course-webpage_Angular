import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'recipe description', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Frecipe-label-icon-symbol-spoon-575434%2F&psig=AOvVaw2Kus5UqdImVSGkSzTtRg5l&ust=1671780917964000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDog7XbjPwCFQAAAAAdAAAAABAD')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
