import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const text: FC<IProps> = () => {
    return <div className='pl-[20rem] pr-[20rem] pt-[3rem] pb-[3rem] flex justify-between items-center ' style={{backgroundColor:'hsla(0,0%,100%,.8)'}}>
        <div className='self-start'>
            <div>站点索引</div>
            <div>友情链接</div>
        </div>
        <div>
            <div>联系我</div>
            <div>qq:3495314473</div>
            <div>微信:13383024736</div>
            <div>邮箱:3495314473@qq.com</div>
        </div>
        <div className='self-start'>
            <div>© 2024 Merikle</div>
            <div>版权声明</div>
            <div>免责声明</div>
        </div>
    </div>
}

export default memo(text)
