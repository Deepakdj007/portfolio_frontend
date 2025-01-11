import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top-button.component.html',
  styleUrl: './back-to-top-button.component.scss'
})
export class BackToTopButtonComponent {
  showBackToTopButton: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log('Scroll Event Triggered');
    // Logic to determine if scrolling has started
    if (window.scrollY > 0) {
      this.showBackToTopButton = true;
    } else {
      this.showBackToTopButton = false;
    }
  }


  //Function to scroll to top on button click
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
