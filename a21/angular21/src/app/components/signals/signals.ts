import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  firstName: string = "Deepak";
  
  // signal creation
  courseName = signal<string>("Angular");
  courseDuration = signal("15 videos");
  courseDetails = computed(() => this.courseName() + " " + this.courseDuration());


  constructor() {
    this.firstName = "Urs";
    console.log(this.firstName);

    
    // signal data set
    setTimeout(() =>this.courseName.set("React"), 5000);

    // signal data access
    console.log(this.courseName());
    
    
  }

}
