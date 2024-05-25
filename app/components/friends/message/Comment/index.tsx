import React, { memo ,useState} from 'react'
import type { FC, ReactNode } from 'react'
import { Input} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {  message } from 'antd';
import { Button } from '@nextui-org/react';
import { PostMessageApi } from '@/app/api/message';

interface IProps {
    children?: any,
    id?:number,
    answerNickName?:string
}

const Comment: FC<IProps> = ({children,id,answerNickName}) => {
    const {GetMessage,closeComment} = children
    const [messageApi,contextHolder] = message.useMessage();
    const [nickname,setNickName] = useState('')
    const [email,setEmail] = useState('')
    const [website,setWebsite] = useState('')
    const [content,setContent] = useState('')
    const resetForm = ()=>{
        setWebsite('')
        setEmail('')
        setWebsite('')
        setContent('')
    }
    //先进行验证
    const validate = ()=>{
        if(!nickname||!email){
            messageApi.error("请填写必须项目")
            return false
        }
        return true
    }

    //发表留言
    const PostMessage = async()=>{
        try{
         const res = validate() 
         if(!res){
            return
         }
         //如果有id的话重新获取全部
         if(!(id as number >= 0)){
            const res =  await  PostMessageApi({
                nickname:nickname,
                email:email,
                website:website,
                content:content,
            })
            if(res.code === 0){
                messageApi.success('发表成功!!');
                //发表成功后的操作
                resetForm()
                GetMessage()
            }
         }else{
            try{
                const res =  await  PostMessageApi({
                    nickname:nickname,
                    email:email,
                    website:website,
                    content:content,
                    answerNickName:answerNickName
                
                },id)
                if(res.code === 0){
                    messageApi.success("回复成功")
                    closeComment()
                    GetMessage()
                }else{
                    messageApi.error("回复失败")
                }
               
            }catch(e){
                console.log("回复的评论出错了");
            }
            
            
         }  
        }catch(e){
            console.log("发表留言接口出错了");
            
        }
    }
    return <div>
        {contextHolder}
         <div>
                      <TextArea
                            value={content}
                            onChange={(e)=>{
                                setContent(e.target.value)
            
                            }}
                            maxLength={500}
                            placeholder="留下您的建议"
                            style={{ height: 150, resize: 'none' }}
                        />
                        </div>
                        <div className='mt-[40px] flex'>
                            <Input placeholder='必填' className='mr-[20px]' value={nickname} onChange={(e)=>{
                                setNickName(e.target.value)
                            }} prefix='昵称'  ></Input>
                            <Input placeholder='必填' value={email}   onChange={(e)=>{
                                setEmail(e.target.value)
                            }} className='mr-[20px]' type='email' prefix='邮箱'  ></Input>
                            <Input placeholder='选填' value={website}   onChange={(e)=>{
                                setWebsite(e.target.value)
                            }} className='mr-[20px] ' prefix='网址'></Input>
                            <Button className='bg-[#B30000] min-w-[20px] h-[40px] text-[17px] text-[white]' onClick={()=>{
                                PostMessage()
                            }}>发送</Button>
                        </div>
    </div>
}

export default memo(Comment)
