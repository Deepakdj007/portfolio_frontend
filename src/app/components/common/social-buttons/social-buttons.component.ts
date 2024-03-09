import { Component } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [],
  templateUrl: './social-buttons.component.html',
  styleUrl: './social-buttons.component.scss',
})
export class SocialButtonsComponent {
  navigateTo(letter: string) {
    if (letter == 'g') {
      window.open('https://github.com/Deepakdj007');
    } else if (letter == 'i') {
      window.open('https://www.instagram.com/__deepakjose__/');
    } else if (letter == 'l') {
      window.open('https://www.linkedin.com/in/deepakjosecodes/');
    }
  }
}
