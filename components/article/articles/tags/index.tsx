import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const ArticleTags: FC<IProps> = () => {
    const content = [{
        id:'0',
        tag:'前端',
        number:1
    },
    {
        id:'1',
        tag:'后端',
        number:1
    },
    {
        id:'2',
        tag:'全栈',
        number:1
    },
    {
        id:'3',
        tag:'部署',
        number:1
    },
    {
        id:'4',
        tag:'新东西',
        number:1
    }
]
//点击跳转到分类的页面
const gotoCategory = ()=>{
    
}
    return <div className='bg-[white] pl-[15px]  pt-[5px] pb-[15px] border-[#E3E8F7] border-[1px] rounded'>
        <div className='flex flex-wrap'>
            {
                content.map(item=>{
                    return <div key={item.id} className='flex pl-[5px] pr-[5px] pt-[5px] pb-[5px] mr-[10px] mt-[10px] cursor-pointer hover:bg-[#B20909] hover:text-[white] hover:rounded-sm'>
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
