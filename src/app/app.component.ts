import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//interpolação
export class AppComponent {
  title = 'course-manager'

  name: string = 'Eduardo Silva'
}
