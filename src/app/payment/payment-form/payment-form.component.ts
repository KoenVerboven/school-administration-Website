import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Payment } from '../models/payment.model';  
import { PaymentService } from '../services/payment.service';


@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  
  isUpdating: boolean = false;
  disableControls: boolean = false;
  pageTitle: string = '';
  errorMessage: string = '';
  formAction: string = 'true';
  monneySymbol: string = '€';
  paymentId: number = 0;

  paymentMethods = [
    { id: 1, name: 'Cash' },
    { id: 2, name: 'Bancontact' },
    { id: 3, name: 'Visa' },
    { id: 4, name: 'Mastercard' },
  ]


  constructor(private paymentService: PaymentService, private router: Router, private route: ActivatedRoute) {  }

   ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
    const id = result.get('id');
    const action = result.get('action');
    this.paymentId = Number(id);

     alert(this.paymentId);
    /*
    if(id){
      this.paymentService.getPaymentById(Number(id)).subscribe({
      next: result => this.exam = result,
      error: err => this.errorMessage = `Error : (${err.status})`
     });
     this.isUpdating = true;
    } 
    */

    
    if(action == null){this.pageTitle = "Create payment"}
      else if(action == "detail"){
        this.pageTitle = "Payment detail";
        this.formAction = "detail";
        this.disableControls = true;
      }
      else if(action == "update"){this.pageTitle = "Update peyment"}
    });
  }


  navigateBack() {
    this.router.navigateByUrl('/payments');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  updateClick()
  {
    this.formAction = "update";
    this.pageTitle = "Update payment";
    this.disableControls = false;
  }

}
