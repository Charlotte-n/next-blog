'use client';
import type { AppProps } from 'next/app'
import  Layout from "@/app/layouts/global";
import { memo, useEffect, useRef, useState } from 'react';
import TypeWriting from '@/components/type-writing';
import '../app/assets/icon/icon.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from '../styles/page/page.module.css';

//卡片
const Card = ({title,className,img}:{title:string,className:string,img:string})=>{
  //获取容器的高度
  const image = useRef<any>()
  console.log(image);
  
  //向上动画
  const goUp = ()=>{
    gsap.fromTo(
      `.${className}`,
      {  },
      { height:(image.current as any).clientHeight,borderTopRightRadius:'20px',borderTopLeftRadius:'20px', duration: 1,fontSize:'25px' }
    );
  }
  const goDown = ()=>{
    gsap.fromTo(
      `.${className}`,
      {height:(image.current as any).clientHeight},
      {height:(image.current as any).clientHeight / 3,borderTopRightRadius:'0px',borderTopLeftRadius:'0px',fontSize:'18px'}
    )
  }
  
  const myLoader = () => {
  return `http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202304/45e2e370615f8766e0eae1d13f59274b--1195357847.jpg`
}
  return (
    <div className='relative'>
      <Image
      ref={image}
      loader={myLoader}
      src="me.png"
      alt="图片"
      width={900}
      height={400}
      style={{borderRadius:'20px'}}
      className={styles.CardImg}
    />
    <div onMouseEnter={()=>goUp()} onMouseLeave={()=>goDown()} className={`bg-[#252524] hover:cursor-pointer h-[30%] w-[100%] flex justify-center items-center absolute left-0 bottom-0 z-[10px] ${className}`} style={{backgroundColor:'rgba(0,0,0,.6)',backdropFilter:'blur(10px)',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px',fontSize:'18px'}}>
      <div className='text-[white]'>{title}</div>
    </div>
    </div>
  )
}

function App({Component,pageProps}: AppProps) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  //动画
  const [scrollTop,setScrollTop] = useState(0)
  //滑动到第二层
  const scrollToTwo = ()=>{
     window.scrollTo({
        top: 700,
        behavior: 'smooth'
      });
  }
  useEffect(()=>{
    //@ts-ignore
    import('lib-flexible')
    const getScrollTop = function(){
      setScrollTop(document.documentElement.scrollTop)
      console.log(scrollTop);
      
    }
    window.addEventListener('scroll',getScrollTop)
    return ()=>{
      window.removeEventListener('scroll',getScrollTop)
    }
  },[scrollTop])
  return (
    <div className=''>
      <Layout>
          <div className='fixed w-[100vw]' style={{zIndex:-25}}>
        <img alt="blog-bg" decoding="async" data-nimg="1" height={1000} style={{height:"100vh",width:'100vw'}}  src="http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202304/45e2e370615f8766e0eae1d13f59274b--1195357847.jpg" />
      </div>
      {/* 加一个mask */}
      <div className='w-[100%] h-[100vh] fixed z-[-20]' style={{backgroundColor:'rgba(0,0,0,.2)'}}></div>
      {/* 放置一些文字 */}
      <div  className='relative flex flex-col items-center justify-center h-[100vh]'>
        <div className='text-[60px] text-[white] absolute top-[30%]'>世人万千,难以遇我</div>
        {/* 打印机效果 */}
        <div className='absolute top-[55%]'>
            <TypeWriting></TypeWriting>
        </div>
        <div onClick={()=>scrollToTwo()} className='absolute bottom-[20px] z-[1] hover:cursor-pointer'>
          <i className='iconfont icon-xiala  text-[white] ' style={{fontSize:'50px'}}></i>
        </div>
      </div>
      {/* 第二屏幕,博客更多功能 */}
      <div className='screen2 w-[100%] h-[85vh] flex flex-col justify-center items-center' style={{backgroundColor:'hsla(0,0%,100%,.8)',backdropFilter:'blur(10px)'}}>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[30px] font-bold tracking-[0.2em]'>GROWTH ABILITY</h1>
          <div className='mt-[10px] mb-[10px] w-[100px] h-[10px] bg-[#727CF5] '></div>
          <div>博客更多功能入口</div>
        </div>
        {/* 功能模块 */}
        <div className={`pl-[20px] pr-[20px] mt-[50px] grid justify-center items-center  ${styles.function}`}>
          <div className={styles.functionContent}>
            <Card title={"个人简历"} className='mask' img=''></Card>
          </div>
          <div className={styles.functionContent}>
            <Card title={"后台管理"} className='mask1' img=''></Card>
          </div>
        </div>
      </div>
      {/* 第三个屏幕,记录我的博客的更改时间,滑动的效果 */}
      <div className='flex flex-col justify-center items-center h-[50vh] bg-[#F5F5F5]'>
        <div className='text-[30px] font-bold tracking-[0.2em]'>
          GROWTH RECORD
        </div>
        <div className='mb-[5px]   h-[5px] w-[100px] bg-[#727CF5] '></div>
        <div>[ 左右滑动查看 ]</div>
        <div className='flex items-center flex-col mt-[100px]'>
          <span className='text-[20px] mb-[20px]'>2024/5/15</span>
          <div>今天开始我的网站制作系统</div>
        </div>
      </div>
      </Layout>
    
    </div>
  );
}
export default App

