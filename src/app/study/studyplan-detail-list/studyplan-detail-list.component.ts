import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyplandetailService} from '../services/studyplandetail.service'
import { Router , RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudyPlanDetail } from '../models/studyPlanDetail.model';

@Component({
  selector: 'app-studyplan-detail-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './studyplan-detail-list.component.html',
  styleUrl: './studyplan-detail-list.component.css'
})
export class StudyplanDetailListComponent {
    
  studyplansDetails: StudyPlanDetail[] = [];
  studyplanDetailsCount = 0;
  studyDate = new Date();

  constructor(private studyplandetailService: StudyplandetailService, private router: Router){}

  ngOnInit(){
      this.getStudyPlanDetails();
  }

  getStudyPlanDetails()
  {
    alert(this.studyDate);  
    this.studyplandetailService.getStudyPlanDetails(this.studyDate).subscribe((data: StudyPlanDetail[]) =>{
        this.studyplansDetails = data;
        this.studyplanDetailsCount = this.studyplansDetails.length;
      });
  }

  showCurrent()
  {
    this.studyDate = new Date();
    this.studyplandetailService.getStudyPlanDetails(this.studyDate).subscribe((data: StudyPlanDetail[]) =>{
      this.studyplansDetails = data;
      this.studyplanDetailsCount = this.studyplansDetails.length;
    });
  }

  showPrevious()
  {
 
    this.studyDate = new Date(this.studyDate.setDate(this.studyDate.getDate() - 1)) ;
    this.studyplandetailService.getStudyPlanDetails(this.studyDate).subscribe((data: StudyPlanDetail[]) =>{
      this.studyplansDetails = data;
      this.studyplanDetailsCount = this.studyplansDetails.length;
    });
  }

  showNext()
  {
    this.studyDate = new Date(this.studyDate.setDate(this.studyDate.getDate() + 1)) ;
    this.studyplandetailService.getStudyPlanDetails(this.studyDate).subscribe((data: StudyPlanDetail[]) =>{
      this.studyplansDetails = data;
      this.studyplanDetailsCount = this.studyplansDetails.length;
    });
  }

}
