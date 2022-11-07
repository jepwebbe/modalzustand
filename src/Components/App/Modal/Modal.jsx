import React from 'react'
import { ModalStyled } from './ModalStyled'
import { useModalStore } from './useModalStore'

export const Modal = () => {
    const { toggleModal, setToggleModal, modalPayload } = useModalStore((store) => ({
        toggleModal: store.toggleModal,
        setToggleModal: store.setToggleModal,
        modalPayload: store.modalPayload
    }))
    return (
        <ModalStyled showmodal={toggleModal}>
            <main>
            <span onClick={() => setToggleModal("none")}>&times;</span>
            {modalPayload}
            </main>
        </ModalStyled>
    )
}
