"use client";
import tocbot from 'tocbot'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Card } from '@nextui-org/react';
import '../toc/index.css'

interface IProps {
    children?: ReactNode,
}

const Toc: FC<IProps> = () => {

    useEffect(()=>{
        tocbot.init({
            tocSelector:'.js-toc',
            contentSelector:'.js-toc-content',
            headingSelector:'h1,h2,h3',
            hasInnerContainers:true,
            activeLinkClass: 'is-active',
            linkClass: 'toc-link',
            includeTitleTags: true,
            scrollSmoothDuration: 100,
            scrollSmooth: true,
            headingsOffset: 0,
            fixedSidebarOffset: 'auto',
        })
        
        return ()=>tocbot.destroy()
    },[])
    return <div className={``}>
        <Card className='px-[40px] py-[20px]'>
        <div className='text-center'>目录</div>
        <div className="mt-[20px] js-toc"></div>
    </Card>
    </div>
    
}

export default memo(Toc)
