import { Component, HostListener, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from '../common/primary-button/primary-button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [PrimaryButtonComponent, NgClass],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
})
export class BioComponent {
  items = new Array(10).fill(null);
  top: any;
  left: any;
  expand = false;

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = $event.pageY - 10 + 'px';
    this.left = $event.pageX - 10 + 'px';
  }

  downloadCV(): void {
    window.open(
      'https://drive.google.com/file/d/1pk7Pzut17u1ZzG6GJaHaBCC6_GlgtiN_/view?usp=sharing'
    );
  }
}
