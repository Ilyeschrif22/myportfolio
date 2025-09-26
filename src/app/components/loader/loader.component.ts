import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="loader-overlay"><div class="spinner"></div></div>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {}