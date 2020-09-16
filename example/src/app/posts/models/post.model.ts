import { Comment } from '../models/comment.model';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments?: Comment[];
}
