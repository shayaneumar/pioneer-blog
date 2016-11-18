﻿import { Injectable, OnInit }   from '@angular/core';
import { PostRepository }       from './post.repository';
import { Post }                 from '../../models/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  posts = [] as Post[];
  selectedPost = {} as Post;

  constructor(private postRepository: PostRepository) { }

  init(): Promise<Post[]> {
    return this.getPosts();
  }

  getAll(): Post[] {
    return this.posts;
  }

  getCurrent(): Post {
    return this.selectedPost;
  }

  private getPosts(): Promise<Post[]> {
    return this.postRepository
      .getAll()
      .then((posts: Post[]) => {
        this.posts = posts
        if (this.posts.length > 0) {
          this.selectedPost = posts[0];
        }
        return this.posts;
      });
  }
}
