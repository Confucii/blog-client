export interface PostPreviewInterface {
  _id: string;
  title: string;
  timestamp: Date;
  posted: boolean;
  date: string;
  colors: number[];
  deg: number;
}

export interface PostData extends PostPreviewInterface {
  text: string;
}

export interface CommentInterface {
  _id: string;
  text: string;
  author: string;
  timestamp: string;
  date: string;
}

export interface PostWithComments {
  post: PostData;
  comments: CommentInterface[];
}
