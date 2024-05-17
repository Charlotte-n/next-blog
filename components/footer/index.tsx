import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Footer: FC<IProps> = () => {
    useEffect(()=>{
        //@ts-ignore
        import('lib-flexible')
        return ()=>{}
    },[])
    return <div className='pl-[10px] pr-[10px] pt-[10px] pb-[10px] text-[15px] w-[100%] flex justify-center items-center' style={{backgroundColor:'hsla(0,0%,100%,.8)'}}>
       <div className='w-[80%] flex justify-between items-center'>
         <div className='self-start flex-1 mr-[10px]'>
            <div>站点索引</div>
            <div>友情链接</div>
        </div>
        <div className='flex-[2] mr-[10px]'>
            <div>联系我</div>
            <div>qq:3495314473</div>
            <div>微信:13383024736</div>
            <div>邮箱:3495314473@qq.com</div>
        </div>
        <div className='self-start flex-1'>
            <div>© 2024 Merikle</div>
            <div>版权声明</div>
            <div>免责声明</div>
        </div>
       </div>
    </div>
}

export default memo(Footer)
