export interface PostMessageParams {
  nickname: string;
  email: string;
  website?: string;
  content: string;
  answerNickName?: string;
}
export type MessagesType = SingleMessageType[];

export interface SingleMessageType extends CommonSingleMessage {
  children: SingleMessageType[];
}

interface CommonSingleMessage {
  nickname: string;
  website: string;
  email: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  deleted: number;
  id: number;
  comments?: commentsType[];
}

export interface commentsType {
  childrenId: number;
  content: string;
  createdAt: string;
  deleted: number;
  id: number;
  nickname: string;
  updatedAt: string;
  answerNickName?: string;
}
