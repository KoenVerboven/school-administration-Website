import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment.model'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = `${environment.apiUrl}/payment`
    
    constructor(private http: HttpClient) { }
  
    getPayments(): Observable<Payment[]>{
      return this.http.get<Payment[]>(this.apiUrl)
    }

    getPaymentById(id : number): Observable<Payment>{
      return this.http.get<Payment>(`${this.apiUrl}/${id}`)
    }


    createPayment(payment : Payment): Observable<Payment>{
      return this.http.post<Payment>(this.apiUrl,payment);
    }

    deletePayment(id : number) : Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    updatePayment(payment: Payment):Observable<Payment>{
      return this.http.put<Payment>(`${this.apiUrl}/${payment.id}`,payment);
    }
}
