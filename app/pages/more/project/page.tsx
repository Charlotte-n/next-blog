'use client'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@/app/pages/layouts/global'
import { useRouter } from 'next/navigation'
import {ProjectData} from '@/app/data/more'
import './index.css'
interface IProps {
    children?: ReactNode
}
interface CardIProps{
    header:string,
    desc:string,
    link:string
}
const Card :FC<CardIProps>= ({header,desc,link})=>{
    const router = useRouter()
    const gotoProject = ()=>{
        router.push(link)
    }
    return (
        <div className='bg-[#D6324D] rounded-md cursor-pointer hover:shadow-[0px_0px_60px_5px_rgba(214,50,77,0.3)]'>
            <div className='  text-[white] py-[20px] px-[20px]'>
               <div className='pb-[50px] border-b-[#E5E5E5] border-b-[2px] text-[18px]'>
                 <div className='text-[23px] mb-[20px]'>{header}</div>
                 <div className='text-[16px]'>{desc}</div>
               </div>
               <div  onClick={()=>gotoProject()} className='text-[white] mt-[20px] text-[18px] hover:text-[#FF7300] cursor-pointer'>
                Come Here
               </div>
            </div>
        </div>
    )
}

const Project: FC<IProps> = () => {
    return  <div className='relative'>
        <Layout>
            <div className='min-h-[100vh] pt-[100px] pb-[140px] w-[70%] m-auto'>
                <div className='grid grid-cols-2 gap-4 singleProject'>
                    {
                        ProjectData.map((item)=>{
                            return (
                                 <Card key={item.link} header={item.header} desc={item.desc} link={item.link}></Card>
                            )
                        })
                    }
                   
                </div>
            </div>
        </Layout>
    </div>
}

export default memo(Project)
