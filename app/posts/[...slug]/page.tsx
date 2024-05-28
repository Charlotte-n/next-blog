//这个页面专门做布局的
import { format, parseISO } from 'date-fns'
//@ts-ignore
import { allPosts } from 'contentlayer/generated'
import Layout from '../../pages/layouts/global'
import Introduction from '@/app/components/articles/introduction'
import { Card } from '@nextui-org/react'
import Toc from '@/app/components/articles/toc/toc'
import './index.css'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Video from '@/app/components/articles/code/Video'

const usedcomponents = {
    Video,
  };
// export const generateStaticParams = async () => allPosts.map((post:any) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  let slugPath = params.slug.join('/')
  const post = allPosts.find((post:any) => post._raw.flattenedPath === decodeURI(slugPath))
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  let slugPath = params.slug.join('/')
  const post = allPosts.find((post:any) => post._raw.flattenedPath === decodeURI(slugPath))
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className='relative pb-[200px]'>
      <Layout>
      <article className="mx-auto max-w-xl px-[30px]  py-8 flex justify-between min-h-[100vh]">
        {/* 左侧 */}
        <div className='left w-[20%]  text-[20px]'>
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
        {/* 右侧 */}
        <div className="right text-[20px] w-[78%] mb-8 ">
          <Card className='px-[40px] py-[30px]'>
             <h1 className="text-[30px] font-bold text-center">{post.title}</h1>
            <time dateTime={post.date} className="mt-1 text-[15px] text-gray-600 text-center">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <div className='js-toc-content'>
              <MDXContent components={usedcomponents}></MDXContent>
            </div>
            
             {/* <div className=" [&>*]:mb-1 [&>*:last-child]:mb-0 js-toc-content" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
          </Card>
          
        </div>
       
      </article>
    </Layout>
       
    </div>
    
   
  )
}

export default PostLayout