import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Prev: FC<IProps> = () => {
    return <div></div>
}

export default memo(Prev)
