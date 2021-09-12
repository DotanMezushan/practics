import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageHeadersComponent } from '../assets/page-headers/page-headers.component';
import { NameFixPipe } from './pipes/name-fix.pipe';
import { NameSuffixPipe } from './pipes/name-suffix.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    ContactsComponent,
    CustomersComponent,
    PageNotFoundComponent,
    PageHeadersComponent,
    NameFixPipe,
    NameSuffixPipe,
    NewContactComponent,
    NewCustomerComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
   
  
    NameFixPipe,
           NameSuffixPipe
  ]
})
export class AppModule { }
