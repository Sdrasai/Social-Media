interface Post {
  image: string;
  caption: string;
  likes: [string];
  likesNumber: number;
  comments: [string];
  commentsNumber: number;
  commentsMessage: string;
  saved: boolean;
}

export default Post;
