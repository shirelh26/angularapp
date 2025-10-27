import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserComponent } from './user/user';
import { USERS } from './fake_users';

@Component({
  selector: 'app-root',
  imports: [Header,UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
  users= USERS; 
}
