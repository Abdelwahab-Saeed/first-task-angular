import { Component } from '@angular/core';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  myName : string = 'Abdelwahab Saeed';
  myTitle :string = 'Full-stack web developer';
}
