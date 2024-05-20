import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Modal } from 'antd'

interface IProps {
    children?: any,
    title:string,
    content:any,
    isOpen:boolean
}

const SingleNoteModal: FC<IProps> = ({title,content,isOpen,children}) => {
    const {cancel}  = children
    return <div>
        <Modal title={title}  open={isOpen} footer={null} onCancel={()=>cancel()}>
            <div>
                {content}
            </div>
        </Modal>
    </div>
}

export default memo(SingleNoteModal)
