import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { USERS } from './fake_users';
import { User } from './user/user';



@Component({
  selector: 'app-root',
  imports: [Header,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
  users= USERS; 
  selectedUser = this.users[0];
  
  onUserSelected(userId: string) {
    const userClicked = this.users.find((user)=>user.id === userId)
    console.log('user Clicked from father', userClicked);
  }

}
