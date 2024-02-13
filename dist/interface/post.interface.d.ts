export interface IPostData {
    userId: any;
    mediaType: string;
    mediaUrl: string;
    caption: string;
    likes: ILikesData;
    comments: ICommentsData;
    saved: boolean;
}
export interface ILikesData {
    byUser: string[];
    likesNumber: number;
}
export interface ICommentsData {
    commentsMessages: [{
        userId: string;
        message: string;
    }];
    commentsNumber: number;
}
