import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public id: number,
    public firstName:string,
    public lastName:string,
    public email:string,
    public phoneNumber:string,
    public status:boolean,
    public statusDisplay : string,
    public message :string,
    public success : boolean

  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private apiUrl = 'http://localhost:8080/ServerProject/api';
  constructor(private httpClient:HttpClient) {
     }

     getEmployees() {
    return this.httpClient.get<Employee[]>(this.apiUrl + '/employee/allemployee');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(this.apiUrl + '/employee/changestatus' + '/' + employee.id);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(this.apiUrl + '/employee/createmployee', employee);
  }
  public getEmployeesByID(employee) {
    return this.httpClient.post<Employee>(this.apiUrl + '/employee/getEmployeesByID', employee);
  }
  
}

