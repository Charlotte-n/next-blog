import { log } from 'console'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const TypeWriting: FC<IProps> = () => {
    const [text,setText] = useState("")
    const originText = '要开开心心地等着你的意面'
    useEffect(()=>{
        let isDeleting = false
        let currentIndex = 0
        const interval = setInterval(()=>{
            if(!isDeleting&&currentIndex < originText.length){
                setText((prevState)=>prevState + originText[currentIndex])
                currentIndex++
                 // 当达到originText长度时，开始删除   
                if (currentIndex === originText.length-1) {  
                    isDeleting = true;  
                }  
            }else if(isDeleting&&currentIndex > 0){
                currentIndex--
                setText((prevState)=>prevState.slice(0,-1))
                if(currentIndex === 0){
                    isDeleting = false
                }
            }
        },200)
        return ()=>{
            clearInterval(interval)
        }
    },[originText])
    return <div className='text-[white] text-[25px]'>
        {text}
    </div>
}

export default memo(TypeWriting)
