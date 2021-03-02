import { catchError } from 'rxjs/operators';
import { ApplicationError } from './../dto/error/error.dto';
import { BaseDto } from './../dto/base.dto';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService<T extends BaseDto> {

  constructor(private url: string, private client: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.client.get<T[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<T> {
    return this.client.get<T>(this.url + '/' + id).pipe(catchError(this.handleError));
  }

  create(resource: T): Observable<T> {
    return this.client.post<T>(this.url, resource).pipe(catchError(this.handleError));
  }

  modify(resource: T): Observable<T> {
    return this.client.put<T>(this.url + '/' + resource.id, resource).pipe(catchError(this.handleError));
  }

  remove(resource: T): Observable<T> {
    return this.client.delete<T>(this.url + '/' + resource.id).pipe(catchError(this.handleError));
  }

  private handleError(err: Response) {
    if (err.status === 404) {
      return throwError(new ApplicationError(err, ''));
    }
    if (err.status === 400) {
      return throwError(new ApplicationError(err, ''));
    }
    if (err.status === 403) {
      return throwError(new ApplicationError(err, ''));
    }

    return throwError(new ApplicationError(err));
  }

}
