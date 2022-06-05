import { Component, ElementRef, OnInit,  ViewChild } from '@angular/core';
import { ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('nameinput') nameinputref:ElementRef;
  @ViewChild('amountinput') amountinputref:ElementRef;
  constructor(private shoppinglistservice:ShoppinglistService) { }

  ngOnInit(): void {
  }
  onadditem(){
    const newingredient=
    new ingredient(this.nameinputref.nativeElement.value
      ,this.amountinputref.nativeElement.value)
      this.shoppinglistservice.ingredientadded(newingredient);

  }

}
