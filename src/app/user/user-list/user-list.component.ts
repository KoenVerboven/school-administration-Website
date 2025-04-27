import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User} from '../models/user.model';
import { UserService } from '../services/user.service'; 
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule, MatProgressSpinnerModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  userCount = 0;
  loading = false;
  error = '';

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers()
  {
      this.loading = true;  
      this.userService.getUsers().subscribe((data: User[]) =>{
          this.users = data;
          this.userCount = this.users.length;
          this.loading = false;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
      );
  }
}
