import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exam } from '../models/exam.model';
import { ExamService } from '../services/exam.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.css'
})
export class ExamFormComponent {
  
  exam: Exam = {
    id: 0,
    courseId: 0,
    examTitle: '',
    description: '',
    examenDate: new Date(2025,6,4),
    examEndDateTime : new Date(2025,6,4,12,0,0), // Default end time set to 12:00 PM
    maxScore:0,
    minScoreToPassExam: 0
  }

  isUpdating: boolean = false;
  disableControls: boolean = false;
  formAction : string = "true";
  errorMessage : string = "";
  pageTitle: string| null = "";
  examId: number = 0;

  constructor(private examService : ExamService,
              private router: Router,
              private route: ActivatedRoute
  ){}  


  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
    const id = result.get('id');
    const action = result.get('action');
    this.examId = Number(id);

    if(id){
      this.examService.getExamById(Number(id)).subscribe({
      next: result => this.exam = result,
      error: err => this.errorMessage = `Error : (${err.status})`
     });
     this.isUpdating = true;
    } 
    
    if(action == null){this.pageTitle = "Create exam"}
      else if(action == "detail"){
        this.pageTitle = "Exam detail";
        this.formAction = "detail";
        this.disableControls = true;
      }
      else if(action == "update"){this.pageTitle = "Update exam"}
    });
  }

  onSubmit():void{

    if(this.isUpdating){
      //updating
      this.examService.updateExam(this.exam)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/exams'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      //inserting
      this.examService.createExam(this.exam)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/exams'])
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
    this.router.navigateByUrl('/exams')
  }

  updateClick()
  {
    this.formAction = "update";
    this.pageTitle = "Update exam";
    this.disableControls = false;
  }

  deleteClick()
  {
    this.deleteCourse(this.examId);
  }

  deleteCourse(id : number) : void {
    this.examService.deleteExam(id).subscribe({
      next: (response) => {
        this.router.navigate(['/exams']);
      },
      error: (err) => {
        console.error('Error deleting exam',err);
      }
    });
  }

}
