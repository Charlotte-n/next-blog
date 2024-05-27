import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Layout from '../../layouts/global'
import Introduction from '@/app/components/articles/introduction'
import { Card } from '@nextui-org/react'
import Toc from '@/app/components/articles/toc/toc'
import './index.css'
import { useMDXComponent } from 'next-contentlayer/hooks';
import Video from '@/app/components/articles/code/Video'

const usedcomponents = {
  Video,
};
function PostCard(post: Post) {
 const MDXContent = useMDXComponent(post.body.raw);
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-[26px]">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-[15px] text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <MDXContent components={usedcomponents}></MDXContent>
      {/* <div className="js-toc-content  [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
    </div>
  )
}

export default function Content() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className='relative pb-[200px] min-h-[100vh]'>
        <Layout>
            <div className="min-h-[100vh] mx-auto max-w-xl py-8 flex justify-between px-[30px]">
                {/* 左部分 */}
                <div className='w-[20%] text-[20px]'>
                   <Introduction></Introduction>
                   {/* 放一些小卡片,生日，或者纪念日 */}
                   <div className='mt-[20px]'>
                    <Card className='px-[20px] py-[20px]'>
                        <div className='text-center'>距离生日还有</div>
                        <div className='mt-[20px] text-center text-[25px]'>
                            111天
                        </div>
                    </Card>
                   </div>
                   {/* 文章目录 */}
                   <div className='mt-[20px]'>
                    <Toc></Toc>
                   </div>
                </div>
                 {/* 右部分 */}
                <div className='w-[78%]'>
                    <Card className='px-[20px] py-[20px]'>
                        {posts.map((post, idx) => (
                            <PostCard key={idx} {...post} />
                        ))}
                    </Card>
                    
                </div>
        
             </div>
        </Layout>
    </div>
    
  )
}