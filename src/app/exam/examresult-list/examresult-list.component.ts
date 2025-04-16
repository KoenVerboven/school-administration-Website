import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamResult } from '../models/examResult.model'; 
import { ExamResultsService } from '../services/examresults.service';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-examresult-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule, MatProgressSpinnerModule],
  templateUrl: './examresult-list.component.html',
  styleUrl: './examresult-list.component.css'
})
export class ExamResultListComponent {

  examResults: ExamResult[] = [];
  examResultsCount = 0;
  loading = false;
  error = '';
  
    constructor(private examResultService: ExamResultsService, private router: Router){}
  
    ngOnInit(){
        this.getExamResults();
    }
       
    getExamResults()
    {
      this.loading = true;  
      this.examResultService.getStudentsExamResults().subscribe((data: ExamResult[]) =>{
          this.examResults = data;
          this.examResultsCount = this.examResults.length;
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
