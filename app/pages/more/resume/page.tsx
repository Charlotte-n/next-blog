import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@/app/pages/layouts/global'
import { Tag } from 'antd'
import './index.css'

interface IProps {
    children?: ReactNode
}
interface ChildrenIProps{
    header:string,
    children:{
        content:any
    }
}
interface ResumePartType{
    time:string,
    title:string,
    children:{
        contentFirst:ReactNode,
        contentTwice:ReactNode
    },
    technology:string
}

const CardPart:FC<ChildrenIProps> = ({header,children})=>{
    const {content} = children
    return  <div className='text-[16px]'>
                <div className='border-b-[2px] border-b-[#CCCCCC] mb-[20px] pb-[20px] text-[25px] font-[800]'>
                     {header}
                </div>
                <div>
                    {content}
                </div>
            </div>
}
const ResumePart :FC<ResumePartType>= ({time,title,technology,children})=>{
    const {contentFirst,contentTwice} = children
    return <div className='border-b-[#CCCCCC] border-b-[1px] pb-[15px]'>
        <div className='flex justify-between mb-[10px] '>
            <div>{title}</div>
            <div>{time}</div>
        </div>
        <div>
            <div>
                <div  className='indent-[2em]'>
             {
                contentFirst
             }
           </div>
               <div>
                技术选型: {technology}
               </div>
            </div>
           <div className='mt-[10px]'>
            <h3 className='font-[600] text-[15px] mb-[5px]'>职责和成果</h3>
            <div className='indent-[2em]'>
               {
                contentTwice
               }
            </div>
           </div>
        </div>
    </div>
}

const Resume: FC<IProps> = () => {
    return <div className='relative'>
        <Layout>
            <div className='min-h-[100vh] pt-[100px] pb-[150px] px-[40px] text-[16px]'>
                <div className='flex justify-center flex-col m-auto w-[50%]'>
                    <header className='text-[30px] text-center'>Merikle的前端简历</header>
                    <div >
                        {/* 职业概述 */}
                        <div className='mt-[40px]'>
                            <CardPart header='职业概述' >
                                {
                                    {
                                        content:<div className='text-[19px] indent-[2em] card'>
                                    作为一名Web前端开发工程师，我负责设计、开发和维护Web应用程序的用户界面，使之呈现出美观、易用、高效的特性。我能够熟练运用HTML、CSS、JavaScript等前端技术和工具，同时也具备与UI设计师、后端工程师和产品经理等多个团队成员协作的能力。在我的工作中，我不断学习和跟进前沿技术和最佳实践，以提高开发效率和开发质量。
                                </div>
                                    }
                                }
                            </CardPart>
                        </div>
                        {/* 技能概述 */}
                        <div className='mt-[40px]'>
                            <CardPart header='技能概述'>
                                {{
                                    content:<ul className='card' style={{listStyle:'outside',fontSize:'19px',paddingLeft:'15px'}}>
                                        <li>HTML、CSS、JavaScript</li>
                                        <li>React、Vue.js</li>
                                        <li>React Native、微信小程序</li>
                                        <li>TypeScript</li>
                                        <li>Ant Design、Element UI、Echarts、Antv、Arco Design</li>
                                        <li>Redux、Pinia</li>
                                        <li>WebPack、Vite</li>
                                        <li>Node.js、Next.js、Nest.js、koa、express</li>
                                        <li>less、sass</li>
                                        <li>MySQL、Mongodb</li>
                                        <li>数据结构和算法</li>
                                    </ul>
                                }}
                            </CardPart>
                        </div>
                        {/* TODO:我的项目 */}
                        <div className='mt-[40px]'>
                           <CardPart header='我的项目'>
                            {{
                                content:<div>
                                    <div>
                                        <ResumePart title='个人技术博客' time='2024.5 - 至今' technology='React + Antd '>{{
                                            contentFirst:'',
                                            contentTwice:''
                                        }}</ResumePart>
                                    </div>
                                </div>
                            }}
                           </CardPart>
                        </div>
                        {/* 教育经历 */}
                        <div className='mt-[40px]'>
                           <CardPart header='教育背景和在校成就'>
                            {{
                                content:<div>
                                    <div className='border-b-[#E5E5E5] border-b-[1px] pb-[10px]'>
                                        <div className='mb-[5px] text-[18px] font-[600]'>
                                            教育背景
                                        </div>
                                        <div className='flex justify-between text-[16px]'>
                                            <div>齐鲁工业大学</div>
                                            <div>软件工程(本科(非全日制))</div>
                                            <div>2022.6-2026.6</div>
                                        </div>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <div className='text-[18px] font-[600]'>在校成就</div>
                                        <div className='mt-[5px] flex flex-wrap'>
                                            <Tag className='text-[16px] py-[5px] px-[5px] mr-[5px]' color="blue">蓝桥杯web组二等奖</Tag>
                                            <Tag className='text-[16px] py-[5px] px-[5px] mr-[5px]' color="blue">校内二等奖学金</Tag>
                                            <Tag className='text-[16px] py-[5px] px-[5px] mr-[5px]' color="blue">英语四级</Tag>
                                            <Tag className='text-[16px] py-[5px] px-[5px] mr-[5px]' color="blue">普通话考试二甲</Tag>
                                            <Tag className='text-[16px] py-[5px] px-[5px]' color="blue">驾驶证</Tag>
                                        </div>
                                    </div>
                                </div>
                            }}
                           </CardPart>
                        </div>
                        {/* 其他介绍 */}
                        <div className='mt-[40px]'>
                           <CardPart header='其他介绍'>
                            {{
                                content:<div className='card text-[18px] indent-[2em]'>
                                    自己使用了nextjs搭建了博客，当然也在掘金和csdn上来更新我写的文章。

                                </div>
                            }}
                           </CardPart>
                        </div>
                        {/* 自我评价 */}
                        <div className='mt-[40px]'>
                           <CardPart header='自我评价'>
                            {{
                                content:<div className='card text-[18px]'>
                                    <div className='indent-[2em]'>
                                        作为一名热爱前端开发的工程师，我对技术始终保持着敬畏之心，并且不断学习新的知识和技能，以提高自己的技术水平和工作效率。我注重团队合作，乐于分享和交流，能够快速融入团队并且和其他成员良好协作，以达到共同的目标。同时，我有较强的问题解决能力和自主学习能力，在遇到挑战和困难时能够冷静应对，通过不断尝试和探索找到最优解决方案。我希望能够在未来的工作中继续发挥自己的优势，并且不断追求进步和提高。
                                    </div>
                                </div>
                            }}
                           </CardPart>
                        </div>
                       
                    </div>

                </div>
            </div>
        </Layout>
    </div>
}

export default memo(Resume)
