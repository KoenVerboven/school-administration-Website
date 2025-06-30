import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyplandetailService} from '../services/studyplandetail.service'
import { Router , RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudyPlanDetail } from '../models/studyPlanDetail.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-studyplan-detail-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule, MatProgressSpinnerModule],
  templateUrl: './studyplan-detail-list.component.html',
  styleUrl: './studyplan-detail-list.component.css'
})
export class StudyplanDetailListComponent {
    
  studyplansDetails: StudyPlanDetail[] = [];
  studyplanDetailsCount = -1;
  studyDate = new Date();
  today = new Date();
  loading = false;
  error = '';

  constructor(private studyplandetailService: StudyplandetailService, private router: Router){}

  ngOnInit(){
    this.getStudyPlanDetails();
  }

  getStudyPlanDetails()
  {
    this.loading = true;
    this.studyplandetailService.getStudyPlanDetailsFilter().subscribe((
      data: StudyPlanDetail[]) =>{
          this.studyplansDetails = data;
          this.studyplanDetailsCount = this.studyplansDetails.length;
          this.loading = false;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    );
  }

  showCurrent()
  {
    this.studyDate = new Date();
    this.getStudyPlanDetails();
  }

  showPrevious()
  {
    this.studyDate = new Date(this.studyDate.setDate(this.studyDate.getDate() - 1)) ;
    this.getStudyPlanDetails();
  }

  showNext()
  {
    this.studyDate = new Date(this.studyDate.setDate(this.studyDate.getDate() + 1)) ;
    this.getStudyPlanDetails();
  }

}
