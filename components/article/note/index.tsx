import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import SingleNoteModal from '../../../components/article/note/components/modal/index'
interface IProps {
    children?: ReactNode
}

const SingleNote: FC<IProps> = () => {
    const [isOpen,setIsOpen] = useState(false)
    const openModal = ()=>{
        setIsOpen(true)
    }
    const closeModal = ()=>{
        setIsOpen(false)
    }
    // 这里也需要将md转化为html
    return <div className='pl-[10px] pt-[10px] pb-[10px] pr-[10px] text-[18px] bg-[#D6324D] rounded-md text-[white]'>
       <div className='max-w-[400px]'>重装系统时抹掉指纹(登录ssh突然遇到密钥类问题)</div>
       {/* 笔记内容 */}
       <div className='relative flex mt-[20px] overflow-x-auto  overflow-y-hidden bg-[black] pl-[20px] pr-[10px] pb-[10px] pt-[10px]'>
        {/* 全屏显示 */}
        <div className='absolute w-[20px] h-[20px] right-[5px] top-[5px] text-[white] iconfont icon-quanping cursor-pointer hover:text-[#D6324D]' onClick={()=>openModal()}></div>
        <div className='w-[400px] overflow-x-auto overflow-y-hidden'>ssh-keygen -R 172.16.152.209hahhahahahnihsihei</div>
       </div>
       {/* modal */}
       {
        isOpen?<SingleNoteModal title='123' content='hello' isOpen={isOpen}>
            {{
                cancel:closeModal
            }}
        </SingleNoteModal>:null
       }
    </div>
}

export default memo(SingleNote)
