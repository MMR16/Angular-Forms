import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { IuserSettings } from '../model/iuser-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://putsreq.com/huZTomKhUE8MgoUdzAqD";
  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSetting: IuserSettings): Observable<IuserSettings> {
    return this.http.post<IuserSettings>(this.url, userSetting).pipe(
      // tap((data) => console.log(`all data ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }


  getSubscriptions(): Observable<string[]> {
    return of(["monthly", "annual", "life times"]);
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      errorMsg = `Server returned code : ${err.status}, Error message is: ${err.message}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }
}

