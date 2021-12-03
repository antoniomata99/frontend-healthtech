import { useState } from 'react'
import axios from 'axios'

const useAxios = () => {
  const [isUpdate, setIsUpdate] = useState(false) // * Data state
  const [loading, setLoading] = useState(false) // * Loading state
  const [error, setError] = useState(false) // * Error state
  const [message, setMessage] = useState('') // * Message to show

  // ? Function for get the data
  const getData = async (url, request) => {
    try {
      setLoading(true)
      const response = await axios.get(url, request)
      setLoading(false)
      return response.data
    } catch (error) {
      setError(true)
      setMessage('An Internal error occurred ❌')
    }
  }

  // ? Function for create a register
  const postData = async (item, url) => {
    try {
      setLoading(true)
      const response = await axios.post(url, item)
      if (response.status === 201 || response.status === 200) {
        response.status === 200 ? setMessage('Good request 🤗') : setMessage('Data added 🤗')
        setIsUpdate(true)
        setLoading(false)
        setError(false)
        return response.data
      } else {
        setError(true)
        setMessage('Data not added 😔')
      }
    } catch (error) {
      setError(true)
      setMessage('An Internal error occurred ❌')
    }
  }

  // ? Function for update a register
  const updateData = async (id, item, url) => {
    try {
      setLoading(true)
      const response = await axios.put(`${url}${id}/`, item)
      if (response.status === 200) {
        setMessage('Data updated 💪')
        setIsUpdate(true)
        setLoading(false)
        setError(false)
        return response.data
      } else {
        setError(true)
        setMessage('Data not updated 🥲')
      }
    } catch (error) {
      setError(true)
      setMessage('An Internal error occurred ❌')
    }
  }

  // ? Function for delete a register
  const deleteData = async (id, url) => {
    try {
      setLoading(true)
      const response = await axios.delete(`${url}${id}/`)
      setMessage('Data deleted 😱')
      setIsUpdate(true)
      setError(false)
      setLoading(false)
      return response.data
    } catch (error) {
      setError(true)
      setMessage('An Internal error occurred ❌')
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
    setIsUpdate,
  }
}

export { useAxios }
