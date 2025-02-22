import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exam } from '../../../models/exam'; 
import { ExamService } from '../../Services/exam.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.css'
})
export class ExamListComponent {
  exams: Exam[] = [];

  constructor(private examService: ExamService, private router: Router){}

  ngOnInit(){
      this.getExams();
  }
     
  getExams()
  {
      this.examService.getExams().subscribe((data: Exam[]) =>{
        this.exams = data;
        console.log(data);
      });
  }

   showExamDetail(id: number): void{
      this.router.navigate(['/examdetail/detail', id])
   }
}
