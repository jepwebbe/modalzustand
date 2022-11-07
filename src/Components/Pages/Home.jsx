import React from 'react'
import { useFlashMessageStore } from '../App/FlashMessages/useFlashMessageStore'
import { useModalStore } from '../App/Modal/useModalStore'

export const Home = () => {
    const {setFlashMessage } = useFlashMessageStore((store) => ({
        setFlashMessage: store.setFlashMessage,
    }))
    const { setModalPayload } = useModalStore((store) =>({
        setModalPayload: store.setModalPayload,
    }))
  return (
    <div>Home
        <button onClick={() => setFlashMessage("jeg er en fisk")}>flash me</button>
        <button onClick={() => setModalPayload(<FlashMeAButton/>) }>Modal mig</button>
    </div>
  )
}

const FlashMeAButton = () => {
    const {setFlashMessage } = useFlashMessageStore((store) => ({
        setFlashMessage: store.setFlashMessage,
    }))
    return <button onClick={() => setFlashMessage("jeg er *IKKE* en fisk")}>flash me inside a modal</button>
}