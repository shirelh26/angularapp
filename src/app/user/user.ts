import { Component, Input } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  selectedUser = USERS[0];
   @Input() name!: string;
   @Input() avatar!: string;

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
