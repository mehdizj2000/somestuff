import { UserDto } from './../dto/user.dto';
import { combineLatest, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    combineLatest([this.router.paramMap, this.router.queryParamMap])
    .pipe(switchMap(([a1,a2])=>{
      console.log(a1);
      console.log(a2);
      return new Observable<UserDto>();
    }))
    .subscribe(user=>{

    })
   
    // this.router.paramMap.
    // Observable.
  }

}
