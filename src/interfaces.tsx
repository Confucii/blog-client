export interface PostPreviewInterface {
  _id: string;
  title: string;
  timestamp: Date;
  posted: boolean;
  date: string;
}

export interface PostData extends PostPreviewInterface {
  text: string;
}

export interface Comment {
  _id: string;
  text: string;
  author: string;
  timestamp: string;
  date: string;
}

export interface PostWithComments {
  post: PostData;
  comments: Comment[];
}
