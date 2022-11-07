import React from 'react'
import { useFlashMessageStore } from '../App/FlashMessages/useFlashMessageStore'

export const UserProfile = () => {
    const { setFlashMessage } = useFlashMessageStore((store) => ({
        setFlashMessage : store.setFlashMessage,
    }))
  return (
    <button onClick={() => setFlashMessage("Klik fra UserProfile")}>Klik dog</button>
  )
}
