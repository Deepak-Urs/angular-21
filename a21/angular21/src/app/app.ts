import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from './components/signals/signals';
import { ControlFlow } from './components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, DataBinding, Signals, ControlFlow, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular21';
}
