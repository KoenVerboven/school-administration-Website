import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exam } from '../models/exam.model'; 
import { ExamService } from '../services/exam.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule, MatProgressSpinnerModule],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.css'
})
export class ExamListComponent {
  exams: Exam[] = [];
  examsCount = 0;
  loading = false;
  error = '';

  constructor(private examService: ExamService, private router: Router){}

  ngOnInit(){
      this.getExams();
  }
     
  getExams()
  {
    this.loading = true;    
    this.examService.getExams().subscribe((data: Exam[]) =>{
        this.exams = data;
        this.examsCount = this.exams.length;
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    );
  }

   showExamDetail(id: number): void{
      this.router.navigate(['/examdetail/detail', id])
   }
}
