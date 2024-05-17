import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const ArticleTags: FC<IProps> = () => {
    const content = [{
        id:'0',
        tag:'html',
        number:1
    },
    {
        id:'1',
        tag:'css',
        number:1
    },
    {
        id:'2',
        tag:'JavaScript',
        number:1
    },
    {
        id:'3',
        tag:'nodejs',
        number:1
    },
    {
        id:'4',
        tag:'mongodb',
        number:1
    },
    {
        id:'5',
        tag:'React',
        number:1
    },
    {
        id:'6',
        tag:'Vue',
        number:1
    },
    {
        id:'7',
        tag:'React Native',
        number:1,
    },
    {
        id:'8',
        tag:'git',
        number:1
    },
    {
        id:'9',
        tag:'docker',
        number:1
    },
    
]
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
