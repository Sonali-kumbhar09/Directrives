import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }

   @HostListener('keyup',['$event'])
    validateCreditCard(eve : Event){

      let inputControl = eve.target as HTMLInputElement
      this.createErrorContainer(inputControl)
      let val: string=inputControl.value.replace(/\s+/g,'')
      console.log(val,val.length)

      if(val.length >16){
        val=val.substring(0,16)
      }

      console.log(/[^\d]/.test(val))
      if(/[^\d]/.test(val)){
        inputControl.nextElementSibling?.classList.remove('d-none')
      }else{
        inputControl.nextElementSibling?.classList.add('d-none')

      }

      val=this.formatCreditCard(val)
      inputControl.value = val
            
    }
    formatCreditCard(data :string){
      let chunkedArr : Array<string>=[];
      for(let i=0; i< data.length; i+=4){
        chunkedArr.push(data.slice(i, i+4))
        }
      return chunkedArr.join(" ")
    }

    createErrorContainer(control : HTMLInputElement){
      let strong =document.createElement('strong');
      strong.className = "d-none text-danger"
      strong.innerText =`Plz enter valid details !!!`
      control.parentElement?.append(strong)
    }


}
