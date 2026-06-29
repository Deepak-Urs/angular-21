import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  firstName: string = "Deepak";
  courseName: string = "Angular 20 tutorial";
  rollNo: number = 111;
}
