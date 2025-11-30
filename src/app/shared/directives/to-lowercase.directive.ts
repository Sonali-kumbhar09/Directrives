import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToLowercase]'
})
export class ToLowercaseDirective {

  constructor(
     
  ) { }


  @HostListener('keyup',['$event'])
  onSearch (eve : Event){
    console.log((eve.target as HTMLInputElement).value)
    let val=(eve.target as HTMLInputElement).value as string
    (eve.target as HTMLInputElement).value = val.toLowerCase()
  }

}




