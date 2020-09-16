import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../../posts/models/comment.model';
import { PostsFacade } from '../../posts.facade';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent implements OnInit {
  @Input()
  postId: number;

  loading$: Observable<boolean>;
  comments$: Observable<Comment[]>;

  constructor(private postsFacade: PostsFacade) {
    this.loading$ = this.commentsFacade.getLoading$();
    this.comments$ = this.commentsFacade.getComments$();
  }

  ngOnInit(): void {
    this.commentsFacade.loadCommentsOfPost(this.postId);
  }

}
