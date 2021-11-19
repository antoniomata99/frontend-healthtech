import { useState } from 'react'
import axios from 'axios'

const useAxios = () => {
  const [isUpdate, setIsUpdate] = useState(false) // * Data state
  const [loading, setLoading] = useState(false) // * Loading state
  const [error, setError] = useState(false) // * Error state
  const [message, setMessage] = useState('') // * Message to show

  // ? Function for get the data
  const getData = async (url) => {
    try {
      setLoading(true)
      const response = await axios.get(url)
      setLoading(false)
      return response.data
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  // ? Function for create a register
  const postData = async (item, url) => {
    try {
      setLoading(true)
      const response = await axios.post(url, item)
      if (response.status === 201) {
        setMessage('Data added 🤗')
        setLoading(false)
        setError(false)
        return response.data
      } else {
        setError(true)
        setMessage('Data not added 😔')
      }
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  // ? Function for update a register
  const updateData = async (id, item, url) => {
    try {
      setLoading(true)
      const response = await axios.put(`${url}${id}/`, item)
      if (response.status === 200) {
        setMessage('Data updated 💪')
        // setIsUpdate(true)
        setLoading(false)
        setError(false)
        return response.data
      } else {
        setError(true)
        setMessage('Data not updated 🥲')
      }
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  // ? Function for delete a register
  const deleteData = async (id, item, url) => {
    try {
      setLoading(true)
      const response = axios.delete(`${url}${id}/`, item)
      if (response.status === 204) {
        setMessage('Data deleted 😱')
        setLoading(false)
        setError(false)
        return response.data
      } else {
        setError(true)
        setMessage('Data not deleted 😏')
      }
    } catch (error) {
      setError(true)
      setMessage(error.message)
    }
  }

  return {
    getData,
    postData,
    updateData,
    deleteData,
    loading,
    error,
    message,
    setMessage,
    isUpdate,
  }
}

export { useAxios }
