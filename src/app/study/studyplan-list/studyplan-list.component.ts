import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudyPlan } from '../../../models/studyPlan';
import { StudyplanService } from '../../Services/studyplan.service'; 
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-studyplan-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './studyplan-list.component.html',
  styleUrl: './studyplan-list.component.css'
})
export class StudyplanListComponent {
  studyPlans: StudyPlan[] = [];

  constructor(private studyplanService: StudyplanService, private router: Router){}

  ngOnInit(){
      this.getStudyPlans();
  }

  showStudyPlanDetail(id: number): void{
    this.router.navigate(['/studyplandetail/detail', id])
  }
     
  getStudyPlans()
  {
      this.studyplanService.getStudyPlans().subscribe((data: StudyPlan[]) =>{
        this.studyPlans = data;
        console.log(data);
      });
  }

}
