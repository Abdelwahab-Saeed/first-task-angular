import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  fields: string[] = [
    'web design',
    'mobile design',
    'logo design',
    'web application development',
    'mobile application development',
    'pwa development'
  ];
}
