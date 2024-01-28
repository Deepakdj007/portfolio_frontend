import { Component } from '@angular/core';
import { SocialButtonsComponent } from '../social-buttons/social-buttons.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [SocialButtonsComponent],
})
export class NavBarComponent {}
