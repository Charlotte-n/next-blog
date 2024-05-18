import { NextRequest } from "next/server";
import Links from "../../../../servers/models/links";
export async function GET(request: NextRequest) {
  try {
    const res = await Links.findAll();
    return Response.json({
      data: "123",
    });
  } catch (e) {
    return Response.json({
      code: 0,
      msg: "获取所有的喜欢的博主的接口错误了" + e,
    });
  }
}

// export async function Post(request: Request) {
//   try {
//     const {} = request;
//     const res = await Links.create({});
//   } catch (e) {
//     console.log("创建喜欢的博客或者博主");
//   }
// }
