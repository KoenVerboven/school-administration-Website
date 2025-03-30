import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudyPlan } from '../models/studyPlan.model';
import { StudyplanService } from '../services/studyplan.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studyplan-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './studyplan-form.component.html',
  styleUrl: './studyplan-form.component.css'
})
export class StudyplanFormComponent {
 
  studyPlan: StudyPlan ={
    id:0,
    name: '',
    description: '',
    studentId: 0
  }

  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string| null = "";
  studyPlanId: number = 0;

constructor(private studyplanService : StudyplanService,
        private router: Router,
        private route: ActivatedRoute
  ){}  

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
    const id = result.get('id');
    const action = result.get('action');
    this.studyPlanId = Number(id);

    if(id){
      this.studyplanService.getStudyPlanById(Number(id)).subscribe({
      next: result => this.studyPlan = result,
      error: err => this.errorMessage = `Error : (${err.status})`
     });
     this.isUpdating = true;
    } 
    
    if(action == null){this.pageTitle = "Create studyplan"}
      else if(action == "detail"){
        this.pageTitle = "studyplan detail";
        this.formAction = "detail";
        this.disableControls = true;
      }
      else if(action == "update"){this.pageTitle = "Update studyplan"}
    });
  }

  onSubmit():void{

    if(this.isUpdating){
      //updating
      this.studyplanService.updateStudyPlan(this.studyPlan)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/studyplans'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      //inserting
      this.studyplanService.createStudyPlan(this.studyPlan)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/studyplans'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
  }

  navigateBack()
  {
    this.router.navigateByUrl('/studyplans')
  }

  updateClick()
  {
    this.formAction = "update";
    this.pageTitle = "Update studyplan";
    this.disableControls = false;
  }

  deleteClick()
  {
    this.deleteCourse(this.studyPlanId);
  }

  deleteCourse(id : number) : void {
    this.studyplanService.deleteStudyPlan(id).subscribe({
      next: (response) => {
        this.router.navigate(['/studyplans']);
      },
      error: (err) => {
        console.error('Error deleting studyplan',err);
      }
    });
  }

}
