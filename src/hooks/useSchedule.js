import { useEffect, useState } from 'react'
import { useAxios } from './useAxios'
import { useModal } from './useModal'

const useSchedule = (url) => {
  const { data, getData, postData } = useAxios(url)
  const { handleModal, openModal } = useModal()

  const [schedules, setSchedules] = useState([])
  const [scheduleItem, setScheduleItem] = useState({})

  useEffect(() => {
    getData()
  }, [])

  // * Falta por probar
  const handleNewSchedule = async () => {
    if (scheduleItem) {
      try {
        const response = await postData(scheduleItem)
        if (response.statusCode === 200) {
          setSchedules([...schedules, scheduleItem])
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return {
    handleNewSchedule,
    scheduleItem,
    setScheduleItem,
    handleModal,
    openModal,
    data,
    getData,
  }
}

export { useSchedule }
