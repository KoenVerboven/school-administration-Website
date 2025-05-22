import { Component } from '@angular/core';
import { permissions } from './mock-permissions-list';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { rolelistitems } from '../../shared/mocks/mock-role-list';

@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.css'
})
export class PermissionsComponent {
  items = permissions;
  formAction = 'detail';
  disableControls:boolean = true;
  roleList= rolelistitems;

  constructor(private router: Router)
  {

  }

  onSubmit(){
  }

  navigateBack(){
    this.router.navigateByUrl('/settings')
  }

  updateClick(){
    this.formAction = 'update';
    this.disableControls = false;
  }

  cancel(){
    this.formAction = 'detail';
    this.items = permissions;
    this.disableControls = true;
  }

  RefreshGrid()
  {
    alert("refresh");
  }


}
