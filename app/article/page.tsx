'use client';
import { Layout } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const text: FC<IProps> = () => {
    return (
        <Layout>
            <div>123</div>
        </Layout>
    )
}

export default memo(text)
