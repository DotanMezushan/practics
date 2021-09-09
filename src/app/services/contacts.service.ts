import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ContactModel } from '../models/ContactModel';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  public get Contacts(): Observable<ContactModel[]>{
    const rtn = this.http.get("../../assets/data/contacts.json") as Observable<ContactModel[]>;
    return rtn;
  }
}
