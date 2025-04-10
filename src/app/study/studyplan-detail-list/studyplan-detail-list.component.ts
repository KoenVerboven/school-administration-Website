import { Component, OnInit } from '@angular/core';
import {studyplandetailitems} from './mock-studyPlanDetail-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studyplan-detail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studyplan-detail-list.component.html',
  styleUrl: './studyplan-detail-list.component.css'
})
export class StudyplanDetailListComponent {
    items = studyplandetailitems;
}
