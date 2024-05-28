'use client'
import Introduction from '@/app/components/articles/introduction'
import Layout from '@/app/pages/layouts/global'
import Tags from '@/components/article/articles/tags'
import { Card } from '@nextui-org/react'
import React, { memo, useEffect ,useState} from 'react'
import type { FC, ReactNode } from 'react'
import { allPosts, Markdown, Post } from 'contentlayer/generated'
import { PostCard } from '../../home/page'
import { usePathname } from 'next/navigation'
import Pagination from '@/components/pagination'
import '../../home/page.css'
import gsap from 'gsap'
interface IProps {
    children?: ReactNode
}

const Category: FC<IProps> = () => {
    const path = decodeURI(usePathname().split('/').pop() as string)
    //做分页部分
    const basePage = 5
    const length = allPosts.length
    let [posts,setPosts] = useState(()=> allPosts.filter(item=>{
        if(process.env.NEXT_PUBLIC_CURRENT === 'development'){
            return  item.category === `${path}\r`
        }
       return  item.category === `${path}`
    })?.slice(0,basePage ))
    console.log(path,"我的");
    
    // 做分页
    const ChangePage = (index:number)=>{
        setPosts(()=>allPosts.filter(item=>{
       return  item.category === `${path}\r`
    })?.slice((index - 1)*5 ,index * 5))
    }
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
    useEffect(()=>{
        ShowFirst()
    })
    return <div className='relative'>
       <Layout>
        <div className='container-main flex  pt-[100px] pb-[140px] px-[40px] min-h-[100vh]'>
            {/* 左边的 */}
            <div className='left w-[20%]'>
                <Introduction></Introduction>
                <div className='mt-[20px]'>
                    <Tags></Tags>
                </div>
            </div>
            {/* 右边的分类文章 */}
            <div className='right w-[78%]'>
                <Card className='px-[40px] py-[40px]'>
                     {posts.map((post, idx) => (
                            <PostCard key={idx} {...post} />
                        ))}
                        {/* 分页 */}
                        <div>
                            <Pagination total={length} >
                                {{
                                    onChange:ChangePage
                                }}
                            </Pagination>
                        </div>
                </Card>
            </div>
        </div>
       </Layout>
    </div>
}

export default memo(Category)
