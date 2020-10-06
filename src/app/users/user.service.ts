import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// import { ResponseUsers } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string;

  constructor(private http: HttpClient) { }

  // public getUsers(): Observable<ResponseUsers> {
  //   debugger;
  //   return this.http.get<ResponseUsers>(this.url)
  // }

}

