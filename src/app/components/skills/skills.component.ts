import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  focusList : string[] = ['UI/UX Design', 'Responsive Design', 'Web Design', 'Mobile App Design'];
  skiilsList :string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Photoshop', 'AdobeXD', 'Node.js', 'WordpPess']
}
