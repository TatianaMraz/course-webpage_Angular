import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('first recipe', 'recipe description', '../../../assets/img/1.png'),
    new Recipe('second recipe', 'recipe description', '../../../assets/img/2.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
