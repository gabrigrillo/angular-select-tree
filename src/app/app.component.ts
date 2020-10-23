import { Component } from '@angular/core';
import { Category } from './Model/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  cateogries: any = [
    new Category(1,'Matematica',null, [ new Category(2, 'Algebra', 1, null) ]),
    new Category(3,'Storia',null, [ new Category(5, 'Storia Anglosassone', 2, [ new Category(6, 'Storia Dei Polli', 5, [ new Category(7, 'Storia Dei Pulcini', 6, [ new Category(7, 'Storia Delle Uova', 8, null) ]) ]) ]) ]),
    new Category(4,'Italiano',null, null)
  ];;

  constructor(){
    console.log(this.cateogries);
  }

  selected($event){
    console.log($event);
  }

}
