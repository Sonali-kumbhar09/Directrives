import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderCssHigh]'
})
export class RenderCssHighDirective implements OnInit {

  @Input() defaultColor : string = "blueviolet"
  @Input() hoverColor : string = "orange"
  @HostBinding('style.backgroundColor')
  bgColor:string ='pink'

  constructor(
    private _renderer? : Renderer2,
    private _eleRef? : ElementRef
  ) {}

  ngOnInit(): void{
    // this._renderer.setStyle(this._eleRef.nativeElement, "background-color", "pink")
    // this._renderer.setStyle(this._eleRef.nativeElement, "color", "#fff")
    // this._renderer.setStyle(this._eleRef.nativeElement, "padding", "20px")


  // this._renderer.addClass(this._eleRef.nativeElement, "alert")
  // this._renderer.addClass(this._eleRef.nativeElement, "alert-info")

  // setTimeout(() => {
  //   this._renderer.removeClass(this._eleRef.nativeElement,"alert")
  //   this._renderer.removeClass(this._eleRef.nativeElement,"alert-info")

  // },5000)


  this.bgColor = this.hoverColor
}

@HostListener('mouseover')
onMouseOver(){
  this.bgColor = this.hoverColor
}

@HostListener('mouseout')
onMouseOut(){
  this.bgColor = this.defaultColor
}
   

}
