import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mhdInputFormat]'
})
export class InputFormatDirective {

  @Input('mhdInputFormat') format;

  @HostListener('blur')
  onBlur() {
    let val: string = this.el.nativeElement.value;
    if (this.format == 'uppercase')
      this.el.nativeElement.value = val.toUpperCase();
    else this.el.nativeElement.value = val.toLowerCase();
  }

  constructor(private el: ElementRef) {

  }

}
