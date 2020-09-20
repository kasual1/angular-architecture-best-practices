import { User } from 'src/app/users/models/user.model';
import { Comment } from '../../comments/models/comment.model';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments?: Comment[];
  user?: User;
}
