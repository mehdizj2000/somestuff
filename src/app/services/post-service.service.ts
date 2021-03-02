import { Post } from './../comm-data/posts.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  url: string;

  constructor(private client: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(this.url).pipe(catchError((err: Response) => {
      if (err.status === 404)
        return throwError({ 'err': 'no resource found' });
      return throwError(err);
    }));
  }

  createPosts(post: Post): Observable<Post> {
    return this.client.post<Post>(this.url, post);
  }
}
