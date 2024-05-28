/* eslint-disable @next/next/no-img-element */
import {Card, CardBody} from '@nextui-org/react'
import React, { memo, use, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import Comment from '../Comment'
import { Button } from '@nextui-org/react'
import { MessagesType, SingleMessageType, commentsType } from '@/app/api/types/message'
import { GetMessageApi, PostMessageApi } from '@/app/api/message'

interface IProps {
    children?: ReactNode,
    data:SingleMessageType
}
interface childrenIprops{
    children:any,
    data:commentsType
}
const OtherAnswer:FC<childrenIprops> = ({data,children})=>{
    const {showVisible,setId,setAnswerNickName} = children
    return (
        <div className='mt-[20px]'>
                <div className='border-[1px] border-dashed border-[#B00000]'></div>
                <div className='flex items-center justify-between mt-[15px]'>
                    <div className='flex items-center'>
                        <div className='mr-[10px] text-[18px]'>{data.nickname}</div>
                        <div className='text-[13px]'>{data.createdAt}</div>
                    </div>
                     <div onClick={()=>{
                        showVisible()
                        setId(data.childrenId)
                        setAnswerNickName(data.nickname)
                     }} className='pl-[12px] pr-[12px] pt-[2px]  pb-[2px] bg-[#F7F7F9] border-[1px] border-[#E3E8F7] hover:bg-[#B30000] hover:text-[white] cursor-pointer rounded-sm'>
                        <i className='iconfont icon-pinglun' style={{fontSize:'20px'}}></i>
                     </div>
                </div>
                <div className='mt-[5px] text-[13px]'>
                    回复 @{data.answerNickName} :
                </div>
                <div className='mt-[18px] text-[15px]'>{data.content}</div>

            </div>
    )
}


const SingleMessage: FC<IProps> = ({data}) => {
    const [TwiceData,setTwiceData] = useState({} as SingleMessageType)
    const GetMessage  = async ()=>{
      const res =  await GetMessageApi(data.id)
      setTwiceData(res.data as SingleMessageType)
    }
    const [id,setId] = useState(0)
    const [answerNickName,setAnswerNickName] = useState('')
    const [visible,setVisible] = useState(false)
    const showVisible = ()=>{
        setVisible(true)
    }
    const closeVisible = ()=>{
        setVisible(false)
    }
    return (
         <Card className="py-[20px] px-[20px]">
            <div className='flex items-center justify-between'>
                <div className='flex items-center '>
                    
                    <img src='http://cdn-hw-static2.shanhutech.cn/bizhi/staticwp/202304/45e2e370615f8766e0eae1d13f59274b--1195357847.jpg' alt='头像' width={50} height={50} className='rounded-full w-[40px] h-[40px]'/>
                    <div className='ml-[10px] text-[16px] font-[900] text-[#B00000]'>{data.nickname}</div>   
                    <div className='ml-[10px]'>{data.createdAt}</div>
                </div>
                <div onClick={()=>{
                    showVisible()
                    setId(data.id)
                    setAnswerNickName(data.nickname)
                }} className='pl-[12px] pr-[12px] pt-[2px]  pb-[2px] bg-[#F7F7F9] border-[1px] border-[#E3E8F7] hover:bg-[#B30000] hover:text-[white] cursor-pointer rounded-sm'>
                    <i className='iconfont icon-pinglun' style={{fontSize:'20px'}}></i>
                </div>
            </div>
            {/* 回复 */}
            <div className='mt-[20px] '>
                <div className='mb-[10px] text-[15px]'>
                    {data.content}
                </div>
                <div className='pl-[20px] pt-[20px] pr-[20px] pb-[20px] rounded-sm text-[16px] bg-[#F7F7F9]'>
                    <div>
                        <span className='mr-[10px] text-[#89DDFF]'>
                            name:
                        </span>
                        <span>{data.nickname}</span>
                    </div>
                    <div className='mt-[10px]'>
                       <span className='mr-[10px] text-[#89DDFF]'>
                            link:
                        </span>
                        <span>{data.website}</span>
                    </div>
                    <div className='mt-[10px]'>
                         <span className='mr-[10px] text-[#89DDFF]'>
                            desc:
                        </span>
                        <span>{data.content}</span>
                    </div>
                </div>
            </div>   
            {/* 他人的回复 */}
            {
               TwiceData.comments?.length?TwiceData.comments.map(item=>{
                return <OtherAnswer key={item.childrenId} data={item}>{{showVisible:showVisible,setId,setAnswerNickName}}</OtherAnswer>
               }):data.comments?.map(item=>{
                return <OtherAnswer key={item.childrenId} data={item}>{{showVisible,setId,setAnswerNickName}}</OtherAnswer>
               })
            }
            
             {/* 是否显示评论框 */}
             {
                visible? <div className='mt-[10px]'>
                        <Comment id={id} answerNickName={answerNickName}>
                            {{
                                GetMessage:GetMessage,
                                closeComment:closeVisible
                            }}
                        </Comment>
                        <div className='text-center mt-[10px]'>
                            <Button onClick={()=>closeVisible()} className='h-[40px] min-w-[20px]'>取消</Button>
                        </div>
                        
                    </div>:null
             }
                   
        </Card>
  
    )
}

export default memo(SingleMessage)
