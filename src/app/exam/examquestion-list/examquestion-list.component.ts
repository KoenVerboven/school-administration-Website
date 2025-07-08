import { Component } from '@angular/core';
import { examQuestions } from '../mock-examenquestion-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-examquestion-list',
  standalone: true,
  imports: [],
  templateUrl: './examquestion-list.component.html',
  styleUrl: './examquestion-list.component.css'
})
export class ExamquestionListComponent {
  items: any[] = examQuestions;
}
