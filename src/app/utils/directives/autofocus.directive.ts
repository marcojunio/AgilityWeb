import { Directive, Input, OnInit } from '@angular/core';
import {ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  @Input() appAutofocus:boolean = false;

  constructor(private el:ElementRef) {
  }
  ngOnInit(): void {
    this.appAutofocus? setTimeout(() => this.el.nativeElement.focus(),200) : () => {}
  }
}
