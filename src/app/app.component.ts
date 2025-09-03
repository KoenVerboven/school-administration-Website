import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './user/services/auth.service';
import { Subscription } from 'rxjs';
import { AuthResponseData } from  '../app/user/models/authResponseData.model'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidebarComponent,CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  loginPage = false;
  private userSub!: Subscription;
  public userName: string = '';
  public userRole:string = '';
  sidebarVisible:boolean= false;
  public mySchoolName = 'Free univerity';
  sidebarExpanded = true;
  responseData:AuthResponseData={
    id:'',
    userName: '',
    name: '',
    email: '',
    role:'',
    token:''
  }

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if(this.isAuthenticated)
      {
        this.userName = user.name;
        this.userRole = user.role;
        this.sidebarVisible = true;
      }
      console.log(!user);
      console.log(!!user);
    });
  }

  logout(){
    this.loginPage = false;
    this.authService.user.next(this.responseData);
    this.isAuthenticated = false;
    this.sidebarVisible = false;
    this.router.navigate(['/','home']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  GoToLoginPage(): void {
    this.loginPage = true;
    this.router.navigate(['/login']) 
  }

}
