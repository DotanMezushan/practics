import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/CustomerModel';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customersModel!: Array<CustomerModel> ;

  @Input() headerIconParent!:string;
  @Input() headerDescriptionParent!:string;
  @Input() headerTitleParent!:string;


  
  constructor(public customerService: CustomersService) {   }

  ngOnInit(): void {
    this.headerTitleParent ="Customers"
    this.headerDescriptionParent ="Customers Discretion"
    this.headerIconParent="fas fa-user"

  

    this.customerService.Customers.subscribe({
      next: (result : CustomerModel[]) => {
        this.customersModel=result;
        console.log(this.customersModel)
    },
    error:(err: any) =>{
      console.log(err);
    }
    });
  }

  isAlreadyHaveBirthdayThisYear(date: Date): boolean { 
    console.log("i am date");
    console.log(date);
    
    const currentDate= new Date(Date.now()) ;
    console.log("i am currentDate");
    console.log(currentDate);

    let dateAsNumber=Date.parse(date.toString())
    let dateAsDate=new Date(dateAsNumber)
    console.log("i am new Date");
    console.log(dateAsDate);
    
      if( dateAsDate.getMonth()!==currentDate.getMonth())
      return dateAsDate.getMonth() < currentDate.getMonth();
      return (dateAsDate.getDate() <= currentDate.getDate()); 
    
  }

}
