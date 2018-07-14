import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class CommonService {

  private user = new BehaviorSubject<Object>("InitialObject");
  private _baseUrl = 'http://localhost:3000/enroll';
  castUserAsObs = this.user.asObservable();
  
  constructor(private http: HttpClient) { }

  editUser(newUser: Object){
    console.log("newUser in CommonService after submitting form values : ",newUser);
    this.user.next(newUser);
  }

  authenticateTheUser(user: User){
       return this.http.post<any>(this._baseUrl,user)
                    .pipe(catchError(this.errorHandler));
  }

  getUsers(){
    return this.http.get('http://localhost:3000/users')
                  .pipe(catchError(this.errorHandler));
  }
  
  errorHandler(err: HttpErrorResponse){
    return throwError(err)
  }
  

}