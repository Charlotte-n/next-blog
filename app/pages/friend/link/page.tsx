'use client'
import Layout from '@/app/pages/layouts/global'
import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import '../link/page.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface IProps {
    children?: ReactNode
}
//卡片
const Card = ({imageName,name,title}:{imageName:string,name:string,title:string
})=>{
    //动画效果
    const [content,setContent] = useState(()=>1234)
    const handleMouseEnter = ()=>{
        //切换文字
        setContent(123455666)
        gsap.fromTo(
            `.${imageName}`,
            {scale:1 },
            { scale:0,duration:0.2}
            );
        gsap.fromTo(
            `.${name}`,
            {backgroundColor:'white'},
            { backgroundColor:'#B00000',color:'white',duration:1.3}
        );
        gsap.fromTo(
            `.${title}`,
            {color:'black'},
            { color:'white',translateX:'-70px',duration:0.5,}
        );
    }

    const handleMouseLeave = ()=>{
           gsap.fromTo(
      `.${imageName}`,
      {scale:0 },
      { scale:1,duration:0.2}
    );
       gsap.fromTo(
      `.${name}`,
      {backgroundColor:'#B00000'},
      { backgroundColor:'white',color:'black',duration:1.3}
    );
        gsap.fromTo(
            `.${title}`,
            {color:'white',translateX:'-70px'},
            { color:'black',translateX:'0px',duration:0.5}
        );
    }
    
    
    const myLoader = ()=>{
        return 'http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202403/a9bd369e2537a55a836fbb3f707853ee--427633077.jpg'
    }
    return (
        <div onMouseLeave={()=>handleMouseLeave()} onMouseOver={()=>handleMouseEnter()} className={`Card cursor-pointer pl-[20px] pr-[20px] flex items-center  bg-[white] border-[1px] border-solid border-[#E3E8F7] rounded-md h-[100px] mr-[20px] ${name} cardBox`}>
            <Image  loader={myLoader} alt='' src='friend.png' width={200} height={200} className={`image mr-[20px] w-[59px] h-[59px] rounded-full ${imageName}`}></Image>
            <div className={`w-[150px] ${title}` }>
                <div className='title mt-[13px] mb-[5px] text-[23px] '>
                    {content}
                </div>
                <div className='text-[17px] h-[50px] overflow-hidden '>
                    猫女日记 
                </div>
            </div>
        </div>
    )
}

const text: FC<IProps> = () => {
    const myLoader = ()=>{
        return 'http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202403/a9bd369e2537a55a836fbb3f707853ee--427633077.jpg'
    }
    return (
        <div className='relative h-[100%] min-h-[100vh]'>
             <Layout>
       <div className='container'>
        {/* 喜欢的博主 */}
            <div className=''>
                <div className='text-[25px] font-[700] text-[#363636]'>喜欢的博主(20)</div>
            <div className=' grid sm:grid-cols-3 md:grid-cols-4'>
                {
                    new Array(5).fill(0).map((item,index)=>{
                            return (
                            <div key={index} className='mt-[20px]'>
                                <Card title='mao' imageName='hi' name='hhaha'></Card>
                            </div>
                            )
                    })
                }                
            </div>
            </div>
            {/* 喜欢的博客 */}
            <div className='mt-[20px]'>
                <div className='text-[25px] font-[700] text-[#363636]'>喜欢的博客(20)</div>
            <div className=' grid sm:grid-cols-3 md:grid-cols-4'>
                {
                    new Array(5).fill(0).map((item,index)=>{
                            return (
                            <div key={index} className='mt-[20px]'>
                                <Card title='mao' imageName='hi' name='hhaha'></Card>
                            </div>
                            )
                    })
                }
 
            </div>
            </div>
       </div>
    </Layout>
        </div>
    )
}

export default memo(text)
