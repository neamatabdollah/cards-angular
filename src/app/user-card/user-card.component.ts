import { Component, Input } from '@angular/core';
import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';

export interface User {
  profilePicture: string;
  username: string;
  email: string;
  phone: string;
  birthdate: string;
  role: 'admin' | 'user' | 'moderator';
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [DatePipe, NgClass, TitleCasePipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;

  getRoleClass(role: string) {
    switch (role) {
      case 'admin':
        return 'red-chip';
      case 'user':
        return 'green-chip';
      case 'moderator':
        return 'yellow-chip';
      default:
        return '';
    }
  }
}
