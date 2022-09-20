import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: "campoColorido"
})
export class CampoColoridoDirective {

  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2
  ) { }

    @HostListener('focus') colorir(){
      this.renderer.setStyle(this.elementRef.nativeElement,'background-color',`#d9dbdb`)
    }
    @HostListener('blur')  descolorir(){
      this.renderer.setStyle(this.elementRef.nativeElement,'background-color',`#fff`)
    }
}
