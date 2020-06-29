import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    {{title}}
  `,
  styles: ['']
})
export class AppComponent {
  title = 'angular-test';
}
