import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Category } from '../Model/category.model';


@Component({
  selector: 'app-select-tree',
  templateUrl: './select-tree.component.html',
  styleUrls: ['./select-tree.component.scss']
})
export class SelectTreeComponent implements OnInit{

  @ViewChild(MatSelect, { static: true }) inputRef: MatSelect;

  @Output()
  emitter = new EventEmitter();

  @Input()
  array: Category[];

  path: string = 'Tutte';
  splittedPath: string[] = ['Tutte'];

  internalArray: Category[] = [];

  catSelected: Category = new Category(null, null, null, null);

  control: FormControl = new FormControl();

  selectOpened: boolean;

  constructor(){
    this.selectOpened= false;
  }

  ngOnInit(): void {
    console.log(this.array);
    this.internalArray = this.array;
    this.array.push(new Category(0, '-', null, null))
  }

  onSelected($event:MatSelectChange){
    console.log($event);
    //this.catSelected = this.array.find(c => c.Id == $event.value);
    this.control.setValue($event.value);
    this.emitter.emit(this.control.value);
    if($event.value == 0)
      this.internalArray = this.array;

    console.log(this.inputRef);
  }


  openSub(c: Category){
    this.path += ' > ' + c.Nome;
    this.splittedPath = this.path.split(' > ');
    this.internalArray = c.SubCat;
  }
  backInternalArray(a: string){
    if(a == 'Tutte'){
      this.internalArray = this.array;
      this.path = 'Tutte';
      this.splittedPath = ['Tutte'];
    }
    else{
      this.internalArray = this.array.find(c => c.Nome==a).SubCat
      const indx = this.splittedPath.indexOf(a);
      this.path = 'Tutte';
      for (let index = 1; index <= indx; index++) {
        this.path +=  ' > ' + this.splittedPath[index];
      }
      this.splittedPath = this.path.split(' > ');
    }
  }

  toggleSelect($event){
    console.log($event);
    this.selectOpened = $event;
    console.log(this.selectOpened);
  }


}
