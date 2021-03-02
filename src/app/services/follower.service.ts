import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { UserDto } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class FollowerService extends DataService<UserDto> {

  constructor(private httpClient: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', httpClient);
  }
}
