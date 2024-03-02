import { Component, ElementRef, HostListener } from '@angular/core';
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

  downloadCV(): void {
    window.open(
      'https://drive.google.com/file/d/1pk7Pzut17u1ZzG6GJaHaBCC6_GlgtiN_/view?usp=sharing'
    );
  }
}
