import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  dates = [2016, 2018, 2022, 2023];
  info = [
    'Graduated from 10th std with 10 CGPA, with a passion for programming. Joined Higher Secondary where I took Computer Science as my stream.',
    'Graduated from 12th std with 86.6% and joined UG as a BTech Computer Science student at Rajagiri School of Engineering & Technology (Kochi, Kerala).',
    'Developed an interest in Data Science and Web Development during this time. Also, became a content writer and an education content creator. Graduated from BTech and got placed in multiple MNCs. Joined CTS as a Software Developer Intern.',
    'Resigned from CTS and joined Apps Team Technologies (a startup in Kochi) as an Angular Developer. Grew my education content page to over 200,000 followers during this period.',
  ];
}
