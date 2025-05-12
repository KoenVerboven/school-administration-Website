import { Component } from '@angular/core';
import { settingitems } from './mock-settings-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-list',
  standalone: true,
  imports: [],
  templateUrl: './settings-list.component.html',
  styleUrl: './settings-list.component.css'
})
export class SettingsComponent {
  items = settingitems;

  constructor(private router: Router){}

  navigateTo(url : string)
  {
    this.router.navigateByUrl(url)
  }
}
