import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './user/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidebarComponent,CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub!: Subscription;
  public userName: string = '';
  
  public mySchoolName = 'Free univerity';
  sidebarExpanded = true;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if(this.isAuthenticated)
      {
        this.userName = user.user.name;
      }
      console.log(!user);
      console.log(!!user);
    });
  }

  logout(){
    this.isAuthenticated= false;
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
