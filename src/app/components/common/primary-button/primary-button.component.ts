import { Component, Input,Inject,PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  @Input() buttonName!: string;
  @Input() href: string = '';


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  navigate(link: string): void {
    if (isPlatformBrowser(this.platformId)) {
      // Safe to use window or document
      window.open(this.href, '_blank');
    }
  }
}
