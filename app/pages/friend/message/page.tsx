"use client";
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '../../layouts/global'
import { Button, Input } from 'antd';
const { TextArea } = Input;

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
    return <Layout>
        <div className=' m-auto'>
            <div className='globalLayOut h-[88vh] pt-[90px] pl-[40px] pr-[40px] pb-[20px]'>
                <div className='text-[25px] text-center mb-[1px] text-[#363636] font-[600]'>留言</div>
                {/* 一些解释文本 */}
                <div>
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
                </div>
                {/* 一些评论 */}
                <div className='mt-[50px] text-[#363636] font-[600] text-[20px]'>
                    <div >评论</div>
                    <div>
                       <TextArea
                        showCount
                        maxLength={500}
                        placeholder="留下您的建议"
                        
                        style={{ height: 150, resize: 'none',border:'2px solid #E3E8F7' }}
                    />
                    </div>
                    <div className='mt-[40px] flex'>
                        <Input className='mr-[20px] h-[40px]' prefix='昵称' placeholder='必填' style={{border:'2px solid #E2E8F7'}}></Input>
                        <Input className='mr-[20px]' prefix='邮箱' placeholder='必填' style={{border:'2px solid #E2E8F7'}}></Input>
                        <Input className='mr-[20px]' prefix='网址' placeholder='选填' style={{border:'2px solid #E2E8F7'}}></Input>
                        <Button className='bg-[#B30000] h-[40px] text-[17px] text-[white]'>发送</Button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default memo(Message)
