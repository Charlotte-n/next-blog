'use client'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import './index.css'


interface IProps {
    children?: ReactNode
}

const Introduction: FC<IProps> = () => {
    //跳转到GitHub
    const goToGithub = ()=>{
        window.open('https://github.com/Charlotte-n')
    }
    //跳转到稀土掘金
    const goToJueJin = ()=>{
        window.open('https://juejin.cn/user/2228070689300314')
    }
    return  <div className='pl-[20px] pr-[20px] pt-[20px] pb-[20px] text-[white] bg-[#B20909]  rounded-md'>
                        {/* 个人介绍 */}
                        <div className='flex flex-col justify-center items-center '>
                            {/* 随即语句，换成随机的 */}
                            <div className='pt-[3px] pb-[3px] pr-[10px] pl-[10px] bg-[#C43F3F] rounded-md text-[13px]'>
                                有人想杀死清晨
                            </div>
                            <div className='mt-[50px] relative introduction'>
                                <div className='border-[5px] rounded-full avatar'>
                                    <div className={` avatarImg border-[2px] border-[#B40B0B] rounded-full`}>
                                         {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src='http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202304/45e2e370615f8766e0eae1d13f59274b--1195357847.jpg' alt=''  className='rounded-full w-[100px] h-[100px]'/>
                                       
                                    </div>
                                </div> 
                                 <div className='introduce absolute hidden top-[0px] text-[15px] w-[200px] left-[-30%]'>
                                        <div>
                                            这里记录着博主<span className='font-[700]'>七七八八</span>的问题和看法,请带着<span className='font-[700]'>怀疑</span>的态度浏览相关内容，毕竟我<span className='font-[700]'>不是专业</span>人士，但是我<span className='font-[700]'>热爱前端</span>，喜欢探索一些<span className='font-[700]'>前端新技术</span>。
                                        </div>
                                        <div>
                                            可以联系我,讨论技巧。
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* 联系方式 */}
                        <div className='mt-[50px] flex items-center justify-between'>
                            <div className='text-[16px]'>世界为你简单</div>
                            <div  className='flex'>
                                <i onClick={()=>goToGithub()} className='hover:bg-[black] hover:scale-[1.2] w-[40px] h-[40px] rounded-full text-center bg-[#C13939] iconfont icon-github mr-[10px]  cursor-pointer' style={{fontSize:'28px'}}></i>
                                <i onClick={()=>goToJueJin()} className='hover:bg-[black] hover:scale-[1.2] w-[40px] h-[40px] rounded-full text-center bg-[#C13939] iconfont icon-juejin-logo cursor-pointer' style={{fontSize:'28px'}}></i>
                            </div>
                        </div>
                    </div>
}

export default memo(Introduction)
