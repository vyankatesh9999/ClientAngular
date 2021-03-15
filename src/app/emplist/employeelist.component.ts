import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Employee } from '../service/httpclient.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees:Employee[];
   
  constructor(
    private httpClientService:HttpClientService,private router: Router
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
    this.employees=response;
}

deleteEmployee(employee: Employee): void {
  this.httpClientService.deleteEmployee(employee)
    .subscribe( data => {
      alert("Employee status changed successfully.");
      this.ngOnInit(); 
    })
};

editemployee(employeeid): void {
  localStorage.setItem("empid",employeeid);
 this.router.navigate(['/editemployee']);
};

}