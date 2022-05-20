import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggle() {
    this.isOpen = !this.isOpen;
  }


  // @HostListener('click') onClick() {
  //   const hasClass = this.el.nativeElement.classList.contains('open');
  //
  //   if (hasClass) {
  //     this.renderer.removeClass(this.el.nativeElement, 'open');
  //   } else {
  //     this.renderer.addClass(this.el.nativeElement, 'open');
  //   }
  // }
  //
  // constructor(private el: ElementRef, private renderer: Renderer2) {
  // }
}
