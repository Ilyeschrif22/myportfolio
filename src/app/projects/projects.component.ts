import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Angular and modern web technologies.',
      tech: ['Angular', 'TypeScript', 'CSS'],
      links: {
        github: 'https://github.com/yourusername/portfolio',
        live: 'https://yourwebsite.com'
      }
    },
  ];
}
