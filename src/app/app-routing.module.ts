import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path:"",
    redirectTo:'customers',
    pathMatch:'full'
  },
  { 
    path:"customers",
    component: CustomersComponent
  },
  { 
    path:"customers/new",
    component: NewCustomerComponent
  },
  { 
    path:"contacts",
    component: ContactsComponent
  },
  { 
    path:"contacts/new",
    component: NewContactComponent
  },
  { 
    path:"**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
