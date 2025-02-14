import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../../models/teacher';
import { TeacherService } from '../../Services/teacher.service'
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent implements OnInit {

  teacher: Teacher = {
      id: 0,
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }

    isUpdating: boolean = false;
    disableControls: boolean = false;
    formAction : string = "true";
    errorMessage : string = "";
    pageTitle: string| null = "";
   
    constructor(private teacherService : TeacherService,
      private router: Router,
      private route: ActivatedRoute
    ){}         

    ngOnInit(): void {
      this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      //alert(id);
      const action = result.get('action');
      
      if(action == null){this.pageTitle = "Create teacher"}
        else if(action == "detail"){
          this.pageTitle = "Teacher detail";
          this.formAction = "detail";
          this.disableControls = true;
        }

        if(id){
          this.isUpdating = true;
          //console.log("Is updating");
          this.teacherService.getTeacherById(Number(id)).subscribe({
            next: result => this.teacher = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          })
        }
    
    });
  }

}
