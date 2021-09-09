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
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
   
  
    NameFixPipe,
           NameSuffixPipe
  ]
})
export class AppModule { }
