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
          top: '60px',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          top: '40px',
        })
      ),
      transition('closed <=> open', animate('500ms ease-in-out')), // Adjust the duration as needed
    ]),
  ],
})
export class NavBarComponent {
  linkOpen: boolean = false;

  toggleLinks(event: any) {
    event.stopPropagation();
    this.linkOpen = !this.linkOpen;
  }

  openLink(linkNumber: number) {
    switch (linkNumber) {
      case 1: {
        window.open('https://www.instagram.com/datasciencebrain/');
        break;
      }
      case 2: {
        window.open('https://deepakjosecodes.com/');
        break;
      }
    }
  }
}
