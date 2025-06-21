import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { User, UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cards-app';

  users: User[] = [
    {
      profilePicture: 'https://robohash.org/johndoe?set=set1',
      username: 'Robot',
      email: 'robot@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'admin',
    },
    {
      profilePicture: 'https://robohash.org/johndoe?set=set2',
      username: 'Monster',
      email: 'monster@example.com',
      phone: '01234567890',
      birthdate: '1995-11-20',
      role: 'user',
    },
    {
      profilePicture: 'https://robohash.org/johndoe?set=set3',
      username: 'Human',
      email: 'human@example.com',
      phone: '01234567890',
      birthdate: '1992-08-30',
      role: 'moderator',
    },
    {
      profilePicture: 'https://robohash.org/johndoe?set=set4',
      username: 'Cat',
      email: 'cat@example.com',
      phone: '01234567890',
      birthdate: '1993-08-30',
      role: 'user',
    },


    {
      profilePicture: 'https://api.dicebear.com/9.x/adventurer/svg',
      username: 'Avatar',
      email: 'avatar@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'admin',
    },
    {
      profilePicture: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Felix',
      username: 'Felix',
      email: 'felix@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'moderator',
    },
    {
      profilePicture: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Aneka',
      username: 'Aneka',
      email: 'aneka@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'admin',
    },
    {
      profilePicture: 'https://api.dicebear.com/9.x/big-smile/svg?seed=Felix',
      username: 'False',
      email: 'false@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'user',
    },
    {
      profilePicture: 'https://api.dicebear.com/9.x/big-ears/svg?seed=Aneka',
      username: 'New',
      email: 'new@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'moderator',
    },
    {
      profilePicture: 'https://api.dicebear.com/9.x/big-ears/svg?seed=Felix',
      username: 'Felix',
      email: 'felix@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'admin',
    },
    {
      profilePicture: 'https://api.dicebear.com/9.x/big-smile/svg?flip=true',
      username: 'True',
      email: 'true@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'user',
    },
    {
      profilePicture: 'https://api.dicebear.com/9.x/big-smile/svg?seed=Aneka',
      username: 'Aneka',
      email: 'aneka@example.com',
      phone: '01234567890',
      birthdate: '1990-05-15',
      role: 'moderator',
    },
  ];
}
