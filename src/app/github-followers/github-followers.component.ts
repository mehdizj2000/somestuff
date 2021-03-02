import { UserDto } from './../dto/user.dto';
import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private follower: FollowerService) { }

  followers: UserDto[];

  ngOnInit(): void {
    this.follower.getAll().subscribe(res => {
      this.followers = res;
    })

  }

}
