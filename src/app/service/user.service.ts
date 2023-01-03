import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName = new Subject<any>();

  selectedLang = new BehaviorSubject<string>('en')

  constructor(private http: HttpClient) { 

  }



  url = 'https://jsonplaceholder.typicode.com/users';


  getUsers(): Observable<any>{
    return this.http.get(this.url);
  }
}
