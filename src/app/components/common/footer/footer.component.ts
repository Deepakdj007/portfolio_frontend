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
  selector: 'app-footer',
  standalone: true,
  imports: [SocialButtonsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger('fadeInOut', [
      state(
        'open',
        style({
          opacity: 1,
          bottom: '40px',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          bottom: '20px',
        })
      ),
      transition('closed <=> open', animate('500ms ease-in-out')), // Adjust the duration as needed
    ]),
  ],
})
export class FooterComponent {
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
