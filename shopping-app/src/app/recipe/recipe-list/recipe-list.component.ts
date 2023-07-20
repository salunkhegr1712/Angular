import { Component } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes:Array<Recipe>=[]

  constructor(){
    this.recipes.push(new Recipe("Paneer Butter Masala","Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum voluptas necessitatibus numquam odit eligendi repudiandae similique, quo sequi. Laudantium mollitia magni soluta. Praesentium corporis recusandae tempore id repellat amet.","https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/06/paneer.jpg?resize=768%2C720&ssl=1"))
    this.recipes.push(new Recipe("Paneer Butter Masala","Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum voluptas necessitatibus numquam odit eligendi repudiandae similique, quo sequi. Laudantium mollitia magni soluta. Praesentium corporis recusandae tempore id repellat amet.","https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/06/paneer.jpg?resize=768%2C720&ssl=1"))

  }

  func(event:any){
    console.log(event.target.id)
  }
}
