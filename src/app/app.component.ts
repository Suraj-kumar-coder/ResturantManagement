
import { Component } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resturant';
}
