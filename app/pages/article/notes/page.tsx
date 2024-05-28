/* eslint-disable @next/next/no-img-element */
'use client'
import Layout from '../../layouts/global'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import SingleNote from '../../../../components/article/note/index'
import gsap from 'gsap'

interface IProps {
    children?: ReactNode
}

const Notes: FC<IProps> = () => {
    //加一个动画
    const goUp  = ()=>{
        gsap.fromTo('.content',{
            bottom:'100px'
        },
        {
            bottom:'200px' ,translateY:'0px', duration: 0.5, ease: "ease"
        })
    }
    useEffect(()=>{
        goUp()
    })
    return <div className='relative '>
        <Layout>
            <div className=''>
                <div className=''>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img  src='http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202208/8fd69cf1b996d096201a64a22169f855--4289456152.jpg' style={{width:'100%',height:'80vh',borderBottomRightRadius:'30px',borderBottomLeftRadius:'30px'}}></img>
                    <div className='absolute top-[100px] left-[50%] text-[50px] text-[white]'>笔记</div>
                </div>
                {/* 笔记专区 */}
                <div className=''>
                    <div className='relative content bottom-[200px] left-[10%] pt-[20px] pl-[20px] pb-[20px] pr-[20px]  w-[80%] bg-[white] rounded-md'>
                                        <div className='grid grid-cols-3 gap-2'>
                                            {
                                                new Array(10).fill(0).map((item,index)=>{
                                                    return  <SingleNote key={index}></SingleNote>
                                                })
                                            }
                                        
                            </div>     
                    </div>
                </div>
            </div>
        </Layout>
        
    </div>
}

export default memo(Notes)
