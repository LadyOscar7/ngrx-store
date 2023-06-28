import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postReducers } from './store/reducers';
import { PostsEffects } from './store/effects';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/post.service';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', postReducers),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostsService],
  exports: [RouterModule, PostsComponent],
  declarations: [PostsComponent],
})
export class PostsModule {}
