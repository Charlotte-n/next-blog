import Layout from '@/app/pages/layouts/global'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Category: FC<IProps> = () => {
    return <div className='relative'>
       <Layout>
        <div>分类页面</div>
       </Layout>
    </div>
}

export default memo(Category)
