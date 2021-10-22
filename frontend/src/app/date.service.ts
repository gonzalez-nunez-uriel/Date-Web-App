import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class DateService {

  //https breaks cors, even though I enabled it in NestJS
  //don't forget the protocol
  private readonly server_domain: string = 'http://localhost:3000/api/date';

  constructor(private readonly http: HttpClient) {  }

  getDate() {
    return this.http.get(this.server_domain, {
      observe: 'body',
      responseType: 'json'
    });
  }
}
