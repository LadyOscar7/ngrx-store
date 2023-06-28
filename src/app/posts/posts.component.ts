import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from './services/post.service';
import { PostInterface } from './interfaces/post.interface';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../state/app-state.interface';
import { postsSelector } from './store/selectors';
import * as PostsActions from '../posts/store/actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  public posts$: Observable<PostInterface[]>;

  public users$ = this.postService.getUsers();

  constructor(
    private store: Store<AppStateInterface>,
    private postService: PostsService
  ) {
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}
