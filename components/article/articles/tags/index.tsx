'use client'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {useRouter,usePathname} from 'next/navigation';
import { CategoryMapper } from '@/app/data/category';
interface IProps {
    children?: ReactNode
}

const ArticleTags: FC<IProps> = () => {
    const router = useRouter()
    const content = [{
        id:'1',
        tag:'前端',
        number:1
    },
    {
        id:'2',
        tag:'后端',
        number:1
    },
    {
        id:'3',
        tag:'全栈',
        number:1
    },
    {
        id:'4',
        tag:'部署',
        number:1
    },
    {
        id:'5',
        tag:'新东西',
        number:1
    }
]
//点击跳转到分类的页面
const gotoCategory = (name:string)=>{
    router.push('/pages/article/category/' + name)
}
const pathArray = usePathname().split('/')
const currentId = decodeURI(pathArray[pathArray.length - 1])


    return <div className='bg-[white] pl-[15px]  pt-[5px] pb-[15px] border-[#E3E8F7] border-[1px] rounded'>
        <div className='flex flex-wrap'>
            {
                content.map(item=>{
                    return <div onClick={()=>gotoCategory(item.tag)} key={item.id} className={`flex pl-[5px] pr-[5px] pt-[5px] pb-[5px] mr-[10px] mt-[10px] cursor-pointer hover:bg-[#B20909] hover:text-[white] hover:rounded-sm ${CategoryMapper[currentId as any]?.toString() === item.id?'bg-[#B20909] text-[white] rounded-sm':'bg-transparent'}`}>
                        <div className='text-center text-[16px]'>{item.tag}</div>
                        <div>
                            <div className='relative top-[-5px]'>{item.number}</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default memo(ArticleTags)
