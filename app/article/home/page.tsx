'use client';
import  Layout  from '../../layouts/global'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import  '../home/page.css'
import ArticleTag from '../../../components/article/articles/tags/index'
import gsap from 'gsap';

interface IProps {
    children?: ReactNode
}

const ArticleHome: FC<IProps> = () => {
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
    const myLoader = ()=>{
        return 'http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202304/45e2e370615f8766e0eae1d13f59274b--1195357847.jpg'
    }
    const ContentLoader = ()=>{
       return 'http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202304/45e2e370615f8766e0eae1d13f59274b--1195357847.jpg'
    }
    return (
        <Layout>
            {/* 左右布局 */}
            <div className='container01 pt-[100px] pl-[40px] pr-[40px] pb-[100px] bg-[#F3F5FA] w-[100%] flex justify-between'>
                {/* 左侧 */}
                <div className='w-[20%] left'>
                    <div className='pl-[20px] pr-[20px] pt-[20px] pb-[20px] text-[white] bg-[#B20909]  rounded-md'>
                        {/* 个人介绍 */}
                        <div className='flex flex-col justify-center items-center '>
                            {/* 随即语句，换成随机的 */}
                            <div className='pt-[3px] pb-[3px] pr-[10px] pl-[10px] bg-[#C43F3F] rounded-md text-[13px]'>
                                有人想杀死清晨
                            </div>
                            <div className='mt-[50px] relative introduction'>
                                <div className='border-[5px] rounded-full avatar'>
                                    <div className={` avatarImg border-[2px] border-[#B40B0B] rounded-full`}>
                                        <Image loader={myLoader} src='img.png' alt='' width={200} height={200} className='rounded-full w-[100px] h-[100px]'></Image>
                                    </div>
                                </div> 
                                 <div className='introduce absolute hidden top-[0px] text-[15px] w-[200px] left-[-30%]'>
                                        <div>
                                            这里记录着博主<span className='font-[700]'>七七八八</span>的问题和看法,请带着<span className='font-[700]'>怀疑</span>的态度浏览相关内容，毕竟我<span className='font-[700]'>不是专业</span>人士，但是我<span className='font-[700]'>热爱前端</span>，喜欢探索一些<span className='font-[700]'>前端新技术</span>。
                                        </div>
                                        <div>
                                            可以联系我,讨论技巧。
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* 联系方式 */}
                        <div className='mt-[50px] flex items-center justify-between'>
                            <div className='text-[16px]'>世界为你简单</div>
                            <div  className='flex'>
                                <i className='hover:bg-[black] hover:scale-[1.2] w-[40px] h-[40px] rounded-full text-center bg-[#C13939] iconfont icon-github mr-[10px]  cursor-pointer' style={{fontSize:'28px'}}></i>
                                <i className='hover:bg-[black] hover:scale-[1.2] w-[40px] h-[40px] rounded-full text-center bg-[#C13939] iconfont icon-juejin-logo cursor-pointer' style={{fontSize:'28px'}}></i>
                            </div>
                        </div>
                    </div>
                    
                    {/* 标签 */}
                    <div className='mt-[20px]'>
                        <ArticleTag></ArticleTag>
                    </div>
                </div>
                {/* 右侧 */}
                <div className='right w-[78%]  bg-[#FFF] border-[1px] border-[#E3E8F7] rounded-md'>
                    <div className='pl-[30px] pr-[30px] pt-[20px] pb-[20px]'>
                        <div className='text-[25px] text-[800]'>文章<span>(38)</span></div>
                        {/* 文章列表 */}
                        <div className='mt-[20px] text-[16px]'>
                            {/* 日期 */}
                            <div>
                                2024
                            </div>
                            <div className='mt-[10px] flex items-center'>
                                <Image loader={ContentLoader} src='content.png' alt='' width={200} height={200} className='w-[200px] rounded-md'></Image>
                                <div className='ml-[20px] w-[100%]'>
                                    <div className='w-[80%] ' >重生之我在PS2游戏里面当NPC</div>
                                    {/* 标签 */}
                                    <div className='mt-[10px]'>
                                        <span className='text-[12px]'># Hexo</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default memo(ArticleHome)
