import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  pageTitle: string = 'Payment detail';
  errorMessage: string = '';
  formAction: string = 'detail';
  disableControls: boolean = false;
  monneySymbol: string = '€';
  paymentMethods = [
    { id: 1, name: 'Cash' },
    { id: 2, name: 'Bancontact' },
    { id: 3, name: 'Visa' },
    { id: 4, name: 'Mastercard' },
  ]


  constructor(private router: Router, private route: ActivatedRoute) {  }

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
