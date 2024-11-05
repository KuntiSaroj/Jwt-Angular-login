import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //private userUrl : string;
  private basUrl = "http://localhost:8080/user"


 // httpClient = inject(HttpClient);

  constructor(private httpClient : HttpClient) {
    this.basUrl = environment.apiUrl;

    const header = {
      "Authorization" : "Bearer "
    }
  }

  public findAll(data : any) {
    return this.httpClient.get<Users[]>('${this.basUrl}/login',data);
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
