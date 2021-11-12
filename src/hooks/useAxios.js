import { useState, useEffect } from 'react'
import { useModal } from './useModal'
import axios from 'axios'

const URL_BASE = 'https://healt-tech-back.herokuapp.com/api/'

const useAxios = (url) => {
  const { handleModal, openModal } = useModal()
  const [data, setData] = useState([]) // * Data state
  const [loading, setLoading] = useState(false) // * Loading state
  const [error, setError] = useState(false) // * Error state
  const [message, setMessage] = useState('') // * Message to show

  useEffect(() => {
    getData() // * Reload data when component is mounted or data state changes
  }, [])

  // ? Function for get the data
  const getData = async () => {
    try {
      setLoading(true)
      await axios
        .get(`${URL_BASE}${url}`)
        .then((res) => res.data)
        .then((response) => {
          setData(response)
          setLoading(false)
        })
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  // ? Function for create a register
  const postData = async (item) => {
    try {
      setLoading(true)
      const response = await axios.post(`${URL_BASE}${url}`, item)
      if (response.status === 201) {
        setData([...data, response.data])
        setLoading(false)
      } else {
        setError(true)
        setMessage('Data not added')
      }
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  // ? Function for update a register
  const updateData = async (id, item) => {
    try {
      setLoading(true)
      const response = await axios.put(`${URL_BASE}${url}${id}`, item)
      if (response.status === 201) {
        setData([...data, response.data])
        setLoading(false)
      } else {
        setError(true)
        setMessage('Data not updated')
      }
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  // ? Function for delete a register
  const deleteData = async (id, item) => {
    try {
      setLoading(true)
      const response = axios.delete(`${URL_BASE}${url}${id}`, item)
      if (response.status === 201) {
        setData([...data, response.data])
        setLoading(false)
      } else {
        setError(true)
        setMessage('Data not deleted')
      }
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  return {
    data,
    getData,
    postData,
    updateData,
    deleteData,
    loading,
    error,
    handleModal,
    openModal,
    message,
  }
}

export { useAxios }
