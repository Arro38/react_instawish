interface Post {
  id: number;
  imageUrl: string;
  description: string;
  createdBy: User;
  createdAt: Date;
  liked: { user: { id: number } }[];
  comments: Comment[];
}
