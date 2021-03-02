import { PostServiceService } from './../services/post-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from './posts.interface';

@Component({
  selector: 'comm-data',
  templateUrl: './comm-data.component.html',
  styleUrls: ['./comm-data.component.css']
})
export class CommDataComponent implements OnInit {


  form: FormGroup;

  posts: Post[];

  constructor(private postService: PostServiceService) {

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      id: new FormControl('0')
    })

  }

  createPost(): void {
    let post: Post = { id: 0, title: this.form.get('title').value };
    this.postService.createPosts(post).subscribe(res => {
      console.log(res);
      this.posts.splice(0, 0, res);
    })
  }

  updatePost(input: Post): void {
    let post: Post = { id: this.form.get('id').value, title: this.form.get('title').value };
    this.form.get('title').setValue(post.title);
    this.form.get('id').setValue(post.id);
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
      console.log(response);
    }, (error: Response) => {
      console.log(error);
    })
  }

}
