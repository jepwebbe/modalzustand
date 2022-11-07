import create from "zustand"

export const useModalStore = create((set) =>({
    toggleModal : "none",
    setToggleModal : (toggleVal) => {
        set((state) => ({
            toggleModal: (state.toggleModal = toggleVal),
        }))
    },
    modalPayload: null,
    setModalPayload: (payload) => {
        set((state) => ({ 
            modalPayload: (state.modalPayload = payload),
            toggleModal: (state.toggleModal = "block")
        }))
    }
}))