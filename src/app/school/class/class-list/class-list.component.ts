import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router , RouterModule} from '@angular/router';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './class-list.component.html',
  styleUrl: './class-list.component.css'
})
export class ClassListComponent implements OnInit {
  PageTitle: string = "Class List";
  classes: any[] = [];
  classesCount = 0;
  loading = false;
  error = '';
  
  constructor(private classService: ClassService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses():void{
    this.loading = true;
    this.classService.getClasses().subscribe(classesFromApi => {
        this.classes = classesFromApi;
        this.classesCount = this.classes.length;
        this.loading = false;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        this.loading = false;
      }
    ) 
  }

  addClass() {
    this.router.navigate(['/createsclass']);
  }
 
  showClassDetail(id: number): void {
    this.router.navigate(['/classdetail/detail', id]) 
  }

}
