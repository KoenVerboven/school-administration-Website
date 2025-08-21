import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { School } from '../../models/school.model';
import { SchoolService } from '../services/school.service';
import { Router,ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-school-form',  
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './school-form.component.html',
  styleUrl: './school-form.component.css'
})
export class SchoolFormComponent implements OnInit {

  pageTitle = "Create School";
  errorMessage: string = "";
  formAction: string = "true";
  disableControls: boolean = false;
  isUpdating: boolean = false;
  schoolId: number = 0;
  school: School = {
    id: 0,
    name: '',
    streetAndNumber: '' ,
    zipCode: '' ,
    countryId: 0,
    contactPhone: '',
    contactEmail: '',
    website: '',
    logoUrl: '',
    schoolType: '',
    description: '',
    numberOfStudents: 0,
    numberOfTeachers: 0,
    establishedYear: new Date().getFullYear(),
    facilities: ['Library', 'Science Lab', 'Sports Ground'],
    socialMedia: ['X', 'Facebook', 'Instagram'],  
    };


  schoolTypes =[
    {"Id":1,"Name":"Primary School"},  
    {"Id":2,"Name":"Secondary School"},     
    {"Id":3,"Name":"High School"},
    {"Id":4,"Name":"University"},
    {"Id":5,"Name":"Adult Education"}
  ];
  
  constructor(private schoolService: SchoolService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      const action = result.get('action');
      this.schoolId = Number(id);
      if(id){
        this.schoolService.getSchoolById(Number(id)).subscribe({
        next: result => this.school = result,
        error: err => this.errorMessage = `Error : (${err.status})`
       });
       this.isUpdating = true;
      } 
      
      if(action == null){this.pageTitle = "Create school"}
        else if(action == "detail"){
          this.pageTitle = "school detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){this.pageTitle = "Update school"}
   
    });
  }

  onSubmit() {
    if(this.isUpdating){
      //updating
      this.schoolService.updateSchool(this.school)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/courses'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      //inserting
      this.schoolService.createSchool(this.school)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/schools'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
  }

  navigateBack() {
    this.router.navigateByUrl('/schools');
  }
  
  updateClick() {
    this.formAction = "update";
    this.pageTitle = "Update school";
    this.disableControls = false;
  }

}
