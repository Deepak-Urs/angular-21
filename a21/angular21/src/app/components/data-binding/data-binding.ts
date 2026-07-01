import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = "Angular 20 tutorial";
  productPrice: number = 2000;
  dataType: string = "radio";

  showWelcomeMsg() {
    alert("Welcome to angular 20!");
  }

  onCityChange() {
    alert("City changed!")
  }
}
