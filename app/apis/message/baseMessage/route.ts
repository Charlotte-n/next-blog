import { NextRequest } from "next/server";
import Message from "@/servers/models/message";
import Comment from "@/servers/models/comment";

export async function POST(request: NextRequest) {
  try {
    //进行发表评论
    const result = (await request.json()) as any;
    const { nickname, email, website, content, answerNickName } = result;
    const searchParams = request.nextUrl.searchParams;
    const id = Number(searchParams.get("id"));
    if (id > 0) {
      let res;
      res = await Comment.create({
        content,
        nickname,
        childrenId: id,
        answerNickName,
      });
      if (res) {
        return Response.json({
          code: 0,
          data: "",
          msg: "评论成功",
        });
      } else {
        return Response.json({
          code: 1,
          data: "",
          msg: "评论失败",
        });
      }
    } else {
      //存到数据库中
      const res = await Message.create({
        nickname,
        email,
        website,
        content,
      });
      if (res) {
        return Response.json({
          code: 0,
          data: "",
          msg: "发表成功",
        });
      } else {
        return Response.json({
          code: 1,
          data: "",
          msg: "发表失败",
        });
      }
    }
  } catch (e) {
    return Response.json({
      code: 2,
      msg: "提交所有的喜欢的博主的接口错误了" + e,
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = Number(searchParams.get("id"));
    console.log("传递参数了嘛", id);
    //说明是传递了参数，那么就获取单个评论
    if (id > 0) {
      //获取单个评论
      const res = await Message.findOne({
        where: {
          id: id,
        },
        include: Comment,
      });
      return Response.json({
        code: 0,
        msg: "获取成功",
        data: res,
      });
    } else {
      let res = await Message.findAll({
        include: Comment,
      });
      return Response.json({
        code: 0,
        msg: "获取成功",
        data: res,
      });
    }
  } catch (e) {
    return Response.json({
      code: 2,
      data: "",
      msg: "获取所有的喜欢的博主的接口错误了" + e,
    });
  }
}
