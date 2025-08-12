import { Component, OnInit } from '@angular/core';
import { schools } from '../../mock-school-list';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-school-list',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.css'
})
export class SchoolListComponent implements OnInit {
  PageTitle: string = "School List";
  schools: any[] = [];
  schoolsCount = 0;
  loading = false;
  error = '';
    
  constructor(private schoolService : SchoolService, private router: Router) {}
  
  ngOnInit(): void {
    this.getSchools();
  }

   getSchools():void{
    this.loading = true;
    this.schoolService.getSchools().subscribe(schoolsFromApi => {
        this.schools = schoolsFromApi;
        this.schoolsCount = this.schools.length;
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    ) 
  }

  addSchool() {
    this.router.navigate(['/createschool']);
  }

  showSchoolDetail(id: number): void {
    this.router.navigate(['/schooldetail/detail', id]) 
  }
}
