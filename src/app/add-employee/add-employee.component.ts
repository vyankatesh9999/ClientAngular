import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientService, Employee } from '../service/httpclient.service';
import { empty } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
}) 

export class AddEmployeeComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    if(this.empid!=null){
     localStorage.removeItem("empid");
    }
  }
  
     user: Employee = new Employee(null,"","","","",true,"",'',true);
     error_message: string[];
     error_message1: string[];
     empid:number;
     error_message_general: string[]=['Contact to Admin'];
  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute :ActivatedRoute
  ) { }

  ngOnInit() {
   this.empid=Number(localStorage.getItem("empid"));
   if(this.empid){
     this.user.id=this.empid;
    this.httpClientService.getEmployeesByID(this.user)
    .subscribe( data => {
      this.user=data
    });
   }
  }

  createEmployee(): void {
    const regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          this.error_message = this.error_message1;
          alert(data.message);
        },
        error => {
          console.log('oops', error.error);
          if(error.error.message=== 'BAD_REQUEST')
          { 
            this.error_message = error.error.details;
          }
          else{
            this.error_message = this.error_message_general;
             
          }
        });

  };

}