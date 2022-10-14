import React, {useState} from 'react'

export const useModal = () => {

    const [isOpenModal, setOpenModal] = useState(false)
    
    const openModal = () => {
        setOpenModal(true)
    }
    
    const closeModal = () => {
        setOpenModal(false)
    }

    return [isOpenModal, openModal,closeModal]

}
