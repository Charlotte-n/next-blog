import hyRequest from "@/services";
import {
  MessagesType,
  PostMessageParams,
  SingleMessageType,
} from "./types/message";
import { CommonResponseType } from "./types/common";

enum BASEURL {
  POST_MESSAGE = `/message/baseMessage`,
  GET_MESSAGE = `/message/baseMessage`,
}

/**
 * 发表留言
 * @param data
 * @returns
 */
export const PostMessageApi = (data: PostMessageParams, id?: number) => {
  return hyRequest.post({
    url: BASEURL.POST_MESSAGE,
    data,
    params: {
      id,
    },
  });
};

/**
 * 获取评论(单个或者多个评论)
 * @param id
 * @returns
 */
export const GetMessageApi = (id?: number) => {
  return hyRequest.get<CommonResponseType<MessagesType | SingleMessageType>>({
    url: BASEURL.GET_MESSAGE,
    params: {
      id,
    },
  });
};
