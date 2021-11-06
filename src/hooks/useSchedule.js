import { useState } from 'react'
import { useAxios } from './useAxios'

const useSchedule = (url, {}) => {
  const { data: doctors, getData, postData } = useAxios(url, {})

  const [doctorsdata, setDoctorsdata] = useState([])

  // Datos
  const [mensaje, setMensaje] = useState('')
  // Cargando
  const [mensaje, setMensaje] = useState('')
  // ERROR
  const [mensaje, setMensaje] = useState('')

  setDoctorsdata(doctors)

  if (postData == 200) {
    doctorsdata.push({})
    setDoctorsdata(doctorsdata)
  } else if (postData == 201) {
    setMensaje('nasaisnias')
  }

  return { doctors, mensaje }
}

export { useSchedule }
