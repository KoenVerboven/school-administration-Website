import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudyPlan } from '../models/studyPlan.model';
import { StudyplanService } from '../services/studyplan.service'; 
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-studyplan-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule, MatProgressSpinnerModule],
  templateUrl: './studyplan-list.component.html',
  styleUrl: './studyplan-list.component.css'
})
export class StudyplanListComponent {
  studyPlans: StudyPlan[] = [];
  studyPlansCount = 0;
  loading = false;
  error = '';

  constructor(private studyplanService: StudyplanService, private router: Router){}

  ngOnInit(){
      this.getStudyPlans();
  }

  showStudyPlanDetail(id: number): void{
    this.router.navigate(['/studyplandetail/detail', id])
  }
     
  getStudyPlans()
  {
    this.loading = true;  
    this.studyplanService.getStudyPlans().subscribe((data: StudyPlan[]) =>{
        this.studyPlans = data;
        this.studyPlansCount = this.studyPlans.length;
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
