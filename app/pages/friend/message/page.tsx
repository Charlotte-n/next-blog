"use client";
import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '../../layouts/global'
import {Button, Input,Textarea} from "@nextui-org/react";
import { GetMessageApi } from '@/app/api/message';
import Comment from '@/app/components/friends/message/Comment';
import SingleMessage from '../../../components/friends/message/SingleMessage'
import { MessagesType } from '@/app/api/types/message';
interface IProps {
    children?: any
}

const MySingleList:FC<IProps> = ({children})=>{
    return (
         <div className='mt-[20px] flex items-center text-[16px]'>
                    <div className='mr-[10px] shrink-0 w-[10px] h-[10px] rounded-full bg-[#B00000]'></div>
                    {children.content}
        </div>
    )
}

const Message: FC<IProps> = () => {
    useEffect(()=>{
        //@ts-ignore
        import('lib-flexible')
    })
    
    const [messages,SetMessages] = useState([] as MessagesType)
    //获取评论
    const GetMessage = async()=>{
       const res =  await GetMessageApi()       
       SetMessages(res.data as MessagesType)
    }
    useEffect(()=>{
        GetMessage()
    },[])
    useEffect(()=>{
        console.log(messages);
    },[messages])

    return <div className='relative h-[100%] min-h-[100vh] pb-[200px]'>
        <Layout>
            <div className='h-[100%]'>
                <div className='pt-[90px] pl-[40px] pr-[40px] '>
                <div className='globalLayOut'>
                    <div className='text-[25px] text-center mb-[1px] text-[#363636] font-[600]'>留言</div>
                    {/* 一些解释文本 */}
                    <MySingleList>
                        {{
                        'content':<div>这是我搭建的一个<span className='pl-[10px] pr-[10px] pt-[3px] pb-[3px] bg-[#B00000] text-[white] rounded-sm text-[18px]'>NextJs博客</span>。在这里,我相信我会监督自己继续记录学习内容</div>
                        }}
                    </MySingleList>
                    <MySingleList>
                        {{
                        'content':<div>如果对本站有什么<span className='pl-[10px] pr-[10px] pt-[3px] pb-[3px] bg-[#B00000] text-[white] rounded-sm text-[18px]'>好的建议</span>。欢迎留言在此,或者github联系我。</div>
                        }}
                    </MySingleList>
                    <MySingleList>
                        {{
                        'content':<div>如果本站使用素材又涉及到<span className='pl-[10px] pr-[10px] pt-[3px] pb-[3px] bg-[#B00000] text-[white] rounded-sm text-[18px]'>版权问题</span>。请联系我,我会尽快进行处理。</div>
                        }}
                    </MySingleList>
                    {/* 一些评论 */}
                    <div className='mt-[50px] text-[#363636] font-[600] text-[20px]'>
                        <div className='mb-[10px]'>
                            <i className='iconfont icon-pinglun mr-[10px]' style={{fontSize:'23px'}}></i>
                            <span>评论</span>
                        </div>
                        <Comment>
                            {{
                                GetMessage:GetMessage
                            }}
                        </Comment>
                    </div>
                    {/* 用户的评论 */}
                    <div className='mt-[30px]'>
                        {/* 进行循环 */}
                        {
                           messages?messages.map(item=>{
                              return  <div key={item.id} className='mb-[25px]'>
                                <SingleMessage  data={item}></SingleMessage>
                              </div>
                            }):null
                        }
                        
                    </div>
                </div>
            </div>
            </div>
           
        </Layout>
    </div>
}

export default memo(Message)
