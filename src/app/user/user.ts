import { Component } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  selectedUser = USERS[0];

  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  get userName() {
  return this.selectedUser.name;
}

  changeUser() {
    const randomIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomIndex];
  }
}
