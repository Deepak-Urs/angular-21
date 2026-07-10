import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisible: boolean = true;
  startMonthName: string = "feb";
  cities: string[] = ["Mysur, Bengalur, Panji, Nagpur"];
  studentsList: any[] = [
    {name: 'A', city: "Mysuru", isActive: true},
    {name: 'B', city: "Pune", isActive: true},
    {name: 'C', city: "Goa", isActive: false},
    {name: 'D', city: "Panji", isActive: true},
  ]

  showP() {
    this.isParaVisible = true;
  }

  hideP() {
    this.isParaVisible = false;
  }

}
