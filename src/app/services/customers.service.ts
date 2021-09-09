import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { CustomerModel } from '../models/CustomerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  
  public get  Customers() :Observable<CustomerModel[]> {
    const rtn =this.http.get("../../assets/data/customers.json") as Observable<CustomerModel[]>;
    return rtn;
   }

}
