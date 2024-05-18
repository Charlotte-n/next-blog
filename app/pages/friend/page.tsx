import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const text: FC<IProps> = () => {
    return <div>
        友情链接
    </div>
}

export default memo(text)
