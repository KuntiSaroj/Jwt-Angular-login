import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //private userUrl : string;
 // private basUrl = "http://localhost:8080/jwtAuthen"
  // private baseUrl = environment.apiUrl ;  // Use environment variable or default value
  private baseUrl = "http://localhost:8080/jwtAuthen";

 httpClients = inject(HttpClient);

  headers = new HttpHeaders({
    'Content-Type' : 'application/json'
    //  "Authorization" : "Bearer "

  });
  constructor(private httpClient : HttpClient) {
   
    

   
  }

  public onClickLogin(param: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, param, { headers: this.headers });
  }

  // signup(data: any) {
  //   return this.httpClient.post(`${this.baseUrl}/register`, data);
  // }

 
  //for login purpose user other api call method
  // public commonPostApi(data:any, url:string) {
  //   const header = {
  //     "Authorization" : "Bearer "
  //   }
  //   return this.httpClient.post<Users>(this.userUrl+url, data, {headers:header});
  // }
 
}
