import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@/app/pages/layouts/global'

interface IProps {
    children?: ReactNode
}

const Project: FC<IProps> = () => {
    return  <div className='relative'>
        <Layout>
            <div className='min-h-[100vh] pt-[100px]'>
                我的项目
            </div>
        </Layout>
    </div>
}

export default memo(Project)
