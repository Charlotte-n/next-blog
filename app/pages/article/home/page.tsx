'use client';
import Link from 'next/link'
import  Layout  from '../../layouts/global'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import { allPosts, Markdown, Post } from 'contentlayer/generated'
import  '../home/page.css'
import ArticleTag from '../../../../components/article/articles/tags/index'
import gsap from 'gsap';
import Pagination from '@/components/pagination';
import Introduction from '@/app/components/articles/introduction/index'
import { Card } from '@nextui-org/react'
import { compareDesc, format, parseISO } from 'date-fns'
interface IProps {
    children?: ReactNode
}

export function PostCard(post: Post) {
  const myLoader = () => {
    return post.image as string
  }  
  return (
    <div className="mb-[50px] flex">
      <div className='mr-[20px]'>
         <Link href={post.url} className="text-black hover:text-[#B20909] dark:text-blue-400">
            <Image  className='rounded cursor-pointer' loader={myLoader} width={200} height={100} src='bg.png' alt='图片'></Image>
        </Link>
      </div>  
      <div>
        <h2 className="mb-[3px] text-[26px]">
        <Link href={post.url} className="text-black hover:text-[#B20909] dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-[5px] block text-[13px] text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className='text-[18px] w-[300px]'>{post.description?.raw}</div>

      </div>
      
    </div>
  )
}

const ArticleHome: FC<IProps> = () => {
    //做分页
    const basePage = 5
    const length = allPosts.length
    let [posts,setPosts] = useState(()=>allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))?.slice(0,basePage ))
    // 做分页
    const ChangePage = (index:number)=>{
        setPosts(()=>allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice((index - 1)*5,(index*5)))
    }
    useEffect(()=>{
        //@ts-ignore
        import('lib-flexible')
        ShowFirst()
    })
    //刚开始页面的动画
    const ShowFirst = ()=>{
        gsap.fromTo('.left',{
            translateY:'300px'
        },{
            translateY:'0px',duration: 0.5, ease: "ease"
        })
        gsap.fromTo('.right',{
            translateY:'300px'
        },{
            translateY:'0px', duration: 0.5, ease: "ease"
        })
    }
    const ContentLoader = ()=>{
       return 'http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202304/45e2e370615f8766e0eae1d13f59274b--1195357847.jpg'
    }
    

    return (
        <div className='relative pb-[50px]'>
            <Layout>
            {/* 左右布局 */}
            <div className='container-main min-h-[100vh] pt-[100px] pl-[40px] pr-[40px] pb-[100px] bg-[#F3F5FA] flex'>
                {/* 左侧 */}
                <div className='w-[20%] left'>
                    <Introduction></Introduction>
                    {/* 标签 */}
                    <div className='mt-[20px]'>
                        <ArticleTag></ArticleTag>
                    </div>
                </div>
                {/* 右侧 */}
                <div className='right  w-[78%]'>
                       {/* 右部分 */}
                <div className='w-[100%]'>
                    <Card className='px-[40px] py-[40px]'>
                        {posts.map((post, idx) => (
                            <PostCard key={idx} {...post} />
                        ))}
                         {/* 分页 */}
                        <div className=' w-[100%] text-center'>
                            <Pagination total={length}>
                                {{
                                    onChange:ChangePage
                                }}
                            </Pagination>
                        </div>
                    </Card>
                    
                </div>
                   
                </div>

            </div>
            
        </Layout>
        </div>
        
    )
}

export default memo(ArticleHome)
