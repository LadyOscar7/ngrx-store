import { Component } from '@angular/core';
import { combineLatest, map, tap } from 'rxjs';
import { PostsService } from './services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  public posts$ = this.postService
    .getPosts()
    .pipe(tap((posts) => console.log('Posts: ', posts)));

  public users$ = this.postService.getUsers();

  public combineObs$ = combineLatest([this.posts$, this.users$]).pipe(
    map(([posts, users]) => {
      return {
        posts: posts,
        users: users,
      };
    })
  );

  constructor(private postService: PostsService) {}
}
