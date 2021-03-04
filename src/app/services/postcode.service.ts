import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostCodeDto } from './../dto/postcode.dto';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class PostcodeService {

  private url: string;

  private headers: HttpHeaders;

  constructor(private oktaAuth: OktaAuthService, private httpClient: HttpClient) {
    
  }

  async lookupProds(term: String): Promise<PostCodeDto> {

    this.url = 'http://127.0.0.1:9596/api/v1/search/';


    const accessToken = this.oktaAuth.getAccessToken();
    return this.httpClient.get<PostCodeDto>(this.url + term , {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      }
    }).toPromise();

    // return this.oktaAuth.$authenticationState.pipe(switchMap(res => {
    //   console.log(this.oktaAuth.getAccessToken);
      
    //   this.headers = new HttpHeaders();
    //   this.headers.set('Authorization', 'Bearer ' + this.oktaAuth.getAccessToken);
    //   return this.httpClient.get<PostCodeDto>(this.url + term, { headers: this.headers });
    // }));

  }

}
