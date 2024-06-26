import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode,
    url:string,
    width:number | 300,
    height:number | 200
}

const Video: FC<IProps> = ({url,width,height}) => {
    return (
        <div className='aspect-w-16 aspect-h-9 '>
            <iframe className={'aspect-video  md:aspect-square'} style={{
                width:width + 'px',
                height:height  +'px'
            }} src={`${url}&high_quality=1&as_wide=1`} title='video player' allowFullScreen={true} sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups"></iframe>
        </div>
    )
    
}

export default memo(Video)
