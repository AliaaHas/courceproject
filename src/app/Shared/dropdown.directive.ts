import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 @HostBinding('class.open') IsOpen=false;
  @HostListener('click') toggleopen(){
    this.IsOpen=!this.IsOpen;

  }

  constructor() { }

}
