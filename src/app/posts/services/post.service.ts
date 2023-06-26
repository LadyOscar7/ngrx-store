import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInterface } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';

@Injectable()
export class PostsService {
  getPosts(): Observable<PostInterface[]> {
    const posts = [
      { id: '1', title: 'First post' },
      { id: '2', title: 'Second post' },
      { id: '3', title: 'Third post' },
    ];
    return of(posts).pipe(delay(2000));
  }

  getUsers(): Observable<User[]> {
    const users = [
      { name: 'Iva', age: 29 },
      { name: 'Lea', age: 26 },
      { name: 'Mia', age: 27 },
    ];
    return of(users).pipe(delay(3000));
  }
}
