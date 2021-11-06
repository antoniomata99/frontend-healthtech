import { useState } from 'react'

const useModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return { openModal, handleModal }
}

export { useModal }
