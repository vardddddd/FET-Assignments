import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDeliveryProfileService {

  constructor(private DeliveryUpdate:HttpClient) {}

   updateDeliveryProfile(data:any):Observable<any>{
     return this.DeliveryUpdate.put<any>("http://localhost:7200/deliveryPerson/501",data);
   }
}
