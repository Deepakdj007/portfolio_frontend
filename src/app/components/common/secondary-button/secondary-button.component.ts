import { Component, Input,Inject,PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
})
export class SecondaryButtonComponent {
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
