import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { courseSheduleWeekOverviews } from './mock-course-weekoverview';


@Component({
  selector: 'app-course-shedule-week-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-shedule-week-overview.component.html',
  styleUrl: './course-shedule-week-overview.component.css'
})
export class CourseSheduleWeekOverviewComponent {
   courseSheduleWeekOverviews = courseSheduleWeekOverviews;
}
