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
    if (letter == 'f') {
      window.open('https://www.facebook.com/');
    } else if (letter == 'i') {
      window.open('https://www.instagram.com/datasciencebrain/');
    } else if (letter == 'l') {
      window.open('https://www.linkedin.com/in/deepakjosecodes/');
    }
  }
}
