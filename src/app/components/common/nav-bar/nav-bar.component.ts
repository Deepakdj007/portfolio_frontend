import { Component } from '@angular/core';
import { SocialButtonsComponent } from '../social-buttons/social-buttons.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [SocialButtonsComponent],
  animations: [
    trigger('fadeInOut', [
      state(
        'open',
        style({
          opacity: 1,
          top: '40px',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          top: '0px',
        })
      ),
      transition('closed <=> open', animate('500ms ease-in-out')), // Adjust the duration as needed
    ]),
  ],
})
export class NavBarComponent {
  linkOpen: boolean = false;

  toggleLinks() {
    this.linkOpen = !this.linkOpen;
  }
}
