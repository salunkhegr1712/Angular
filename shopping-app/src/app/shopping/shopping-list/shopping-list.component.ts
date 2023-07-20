import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Array<Ingredient>=[]

  constructor(){
    this.ingredients.push(new Ingredient("potato",80))
    this.ingredients.push(new Ingredient("mango",200))
    this.ingredients.push(new Ingredient("tomato",120))
    this.ingredients.push(new Ingredient("apple",250))
    this.ingredients.push(new Ingredient("almonds",300))
  }
}
