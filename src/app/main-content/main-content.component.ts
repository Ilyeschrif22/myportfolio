import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  name = signal('ilyes chrif');
  title = signal('Software Engineer');
}