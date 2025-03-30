import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamResult } from '../models/examResult.model'; 
import { ExamResultsService } from '../services/examresults.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-examresult-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './examresult-list.component.html',
  styleUrl: './examresult-list.component.css'
})
export class ExamResultListComponent {

  examResults: ExamResult[] = [];
  
    constructor(private examResultService: ExamResultsService, private router: Router){}
  
    ngOnInit(){
        this.getExamResults();
    }
       
    getExamResults()
    {
        this.examResultService.getStudentsExamResults().subscribe((data: ExamResult[]) =>{
          this.examResults = data;
          console.log(data);
        });
    }

}
