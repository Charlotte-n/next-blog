"use client";
import React, {memo, useEffect, useState} from 'react'
import type {FC, ReactNode} from 'react'
import styles from './navigator.module.css'
import Search from "antd/es/input/Search"
import {useRouter,usePathname} from 'next/navigation';
interface IProps {
    children?: any,
    scrollTop:number
}
interface DropDownMenuProps{
    title:string,
    list:{icon:string,name:string,link:string,size?:string}[],
    subCurrent:{link:string | boolean,key:string,id:string}
}
//进行映射
enum MAP_URL  {
    '/'='0',
    '/pages/article/home'='1',
    '/pages/article/notes'='1',
    '/pages/friend/link'='2',
    '/pages/friend/message'='2',
    '/pages/more/resume'='3',
    '/pages/more/project'='3'
}
 // category
    const category = [
        {
            id:'0',
            name:'主页',
            icon:'iconfont icon-shouye',
            link:'/',
            list:false
        },
        {
            id:'1',
            name:'文库',
            icon:'iconfont icon-zhishiwenku',
            link:false,
            list:[
                {
                    name:'文章列表',
                    link:'/pages/article/home',
                    icon:'',
                    key:'1'
                },
                {
                    name:'笔记',
                    link:'/pages/article/notes',
                    icon:'',
                    key:'2'
                },

            ]
        },
        {
            id:'2',
            name:'社交',
            icon:'iconfont icon-youlian',
            link:false,
            list:[
                {
                    name:'友情链接',
                    link:'/pages/friend/link',
                    icon:'',
                    key:'1'
                },
                {
                    name:'留言板',
                    link:'/pages/friend/message',
                    icon:'',
                    key:'2'
                }
            ]
        },
        {
            id:'3',
            name:'更多',
            icon:'iconfont icon-gengduo',
            link:false,
            size:'28px',
            list:[
                {
                    name:'个人简历',
                    link:'/pages/more/resume',
                    icon:'',
                    key:'1'
                },
                {
                    name:'我的项目',
                    link:'/pages/more/project',
                    icon:'',
                    key:'2'
                },
            ]
        }
    ]
//下拉显示的内容
const DropDownMenu = ({title,list,subCurrent}:DropDownMenuProps)=>{
    const router = useRouter()
    const pathName = usePathname()
    const gotoOtherPage = (link:string)=>{
        router.push(link)
    }
    useEffect(()=>{
              console.log(pathName === subCurrent.link,subCurrent.link);
    })
    
    return (
        <div className='absolute bg-[white] rounded z-[10]'>
            <div className=''>
                {
                    list.map(item=>{
                        return (
                            <div key={item.name} className={`${subCurrent.link === pathName?'bg-[#B20909]':null} pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded hover:bg-[#B20909] hover:text-[white]`} onClick={()=>gotoOtherPage(item.link)}>
                                <span className={`${item.icon} mr-[3px] text-[20px]`}></span>
                                <span className='text-[15px]'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
const Navigator: FC<IProps> = ({scrollTop}) => {
    const router = useRouter()
    const PathName = usePathname()
    const onSearch = ()=>{}
    const [current,SetCurrent] = useState('0')
    const [subCurrent,SetSubCurrent]  = useState({} as {id:string,link:string | boolean,key:string})
    //去往别的页面
    const gotoOtherPage = (item:{id:string,link:string | boolean,key:string})=>{
        const link = item.link
        SetCurrent(item.id)
        SetSubCurrent(item)
        console.log(item);
        
        link?router.push(item.link as string):null
    }
  const [hoverCurrent,SetHoverCurrent] = useState('')
  const handMouseOver= (id:string)=>{
    SetHoverCurrent(id)
  }
  const handleMouseLeave = ()=>{
    SetHoverCurrent('')
  }
  useEffect(()=>{
        SetCurrent((MAP_URL as any)[PathName])
        
    },[PathName,current])

    return (
        <div className='z-[100]' style={{boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',position:'fixed',width:'100vw',top:0,backgroundColor:scrollTop >0?'hsla(0,0%,100%,.4)':'transparent',backdropFilter:'blur(10px)'}}>
            <div className=''>
                <div className={styles.header} style={{color:scrollTop>0?'black':'white'}}>
                <div className={`${styles.name} hover:cursor-pointer`} onClick={()=>router.push('/')}>Merikle的Blog</div>
                <div className="flex items-center">
                    <Search className={styles.search} placeholder="输入关键字..." onSearch={onSearch} style={{ width: '180px',marginRight:'20px' }} />
                    <div className="flex items-center">
                        {
                            category.map(item=>{
                                return (
                                    <div onMouseEnter={()=>handMouseOver(item.id)} onMouseLeave={()=>handleMouseLeave()} key={item.id} className="mr-[20px] hover:cursor-pointer" onClick={()=>gotoOtherPage(item as any)}>
                                       <div className='flex items-center'>
                                         <span className={`${item.icon} ${current === item.id?"text-[#D6324D]":"text-[black]"}  mr-[5px]`} style={{fontSize:item.size?item.size:'20px',display:"inline-block"}}></span>
                                         <span className={`${current === item.id?"text-[#D6324D]":"text-[black]"} text-[15px]`}>{item.name}</span>
                                       </div>
                                       <div className={`${hoverCurrent === item.id?'show':'hidden'}`}>
                                            {
                                                item.list?<DropDownMenu subCurrent={subCurrent} title={item.name} list={item.list as {icon:string,name:string,link:string}[]}></DropDownMenu>:null
                                            }
                                       </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </div>
            
        </div>

    )
}

export default memo(Navigator)
