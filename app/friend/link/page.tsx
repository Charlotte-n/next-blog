'use client'
import Layout from '@/app/layouts/global'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'

interface IProps {
    children?: ReactNode
}

const text: FC<IProps> = () => {
    const myLoader = ()=>{
        return 'http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202403/a9bd369e2537a55a836fbb3f707853ee--427633077.jpg'
    }
    return <Layout>
        <Image loader={myLoader} width={1500} height={800}  src='me.png' alt=''></Image>
    </Layout>
}

export default memo(text)
