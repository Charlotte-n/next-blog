import { Button } from 'antd'
import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './index.module.css'

//默认一页10篇文章

interface IProps {
    children?: ReactNode,
    total:number,
    onChange:()=>void
}
const page = 10

const Pagination: FC<IProps> = ({total,onChange}) => {
   const size = Math.floor(total / page) + 7
   const base = 3
   const activeIndex = useRef(1)
   const [pages ,setPages]= useState<any[]>(()=>[])
   const handleChange = (index:number)=>{
        activeIndex.current = index
        renderPages()
        // onChange()
   }
   const renderPages = ()=>{
     setPages([])
     if(size <= base){
        for(let i = 1;i <= size;i++){
            setPages((prev)=>[...prev,i])
        }
    }else{
        let startPage = activeIndex.current  - Math.floor(base / 2);
        let endPage = activeIndex.current   + Math.floor(base / 2);
        if (startPage < 1) {
            startPage = 1;
            endPage = base;
        }

      if (endPage > size) {
        endPage = size;
        startPage = size - base + 1 ;
      }

      if (startPage > 1) {
        setPages((prev)=>[...prev,1])
        if (startPage > 2) {
          setPages((prev)=>[...prev,'...'])
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        setPages((prev)=>[...prev,i])
      }

      if (endPage < size) {
        if (endPage < size - 1) {
          setPages((prev)=>[...prev,'...'])
        }
       setPages((prev)=>[...prev,size])
      }
    }
   }
   useEffect(()=>{
    renderPages()
   },[])
  
    return <div className='flex m-auto justify-between items-center'>
      <div className='mr-[10px]'>
        {
          activeIndex.current === 1?null: <Button onClick={()=>handleChange(activeIndex.current - 1)} className={`${styles.paginationBtn1} iconfont icon-left`}></Button>
        }
       
      </div>
      <div className='flex'>
        {
           pages.map((item,index)=>{
                
                return <div key={index} className='flex text-center items-center '>
                          {
                            item === '...'?<div className='mr-[10px]'>....</div>: <Button className={`${activeIndex.current === item ?styles.active:null} ${styles.paginationBtn} mr-[10px] h-[40px] w-[40px] text-[15px]`} onClick={()=>handleChange(item)}>{item}</Button>
                          }
                          
                        </div>
            })
        }
      </div>
       
        <div >
          {
          activeIndex.current === size?null : <Button  onClick={()=>handleChange(activeIndex.current + 1)} className={`${styles.paginationBtn1} iconfont icon-right`}></Button>
          }
        </div>
        
    </div>
}

export default memo(Pagination)
