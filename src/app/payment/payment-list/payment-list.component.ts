import { Component } from '@angular/core';
import { payments} from './mock-payment-list';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent {
  PageTitle: string = "Payments list";
  monneySymbol: string = '€';
  items = payments;
  paymentsCount = this.items.length;
  loading = false;
  error= "";
  constructor(private router: Router) {}

  addPayment(): void {   
    this.router.navigate(['/createpayment']);
  }

  showPaymentDetail(id: number) {
    this.router.navigate(['/paymentdetail/detail', id]);
  }

}
