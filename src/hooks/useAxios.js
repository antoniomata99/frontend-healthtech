import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (url) => {
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
        .get(url)
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
      const response = await axios.post(url, item)
      if (response.status === 201) {
        setData([...data, response.data])
        setLoading(false)
        setMessage('Data added 🤗')
        setError(false)
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
  const updateData = async (id, item) => {
    try {
      setLoading(true)
      const response = await axios.put(`${url}${id}/`, item)
      if (response.status === 200) {
        setData([...data, response.data])
        setLoading(false)
        setMessage('Data updated 💪')
        setError(false)
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
  const deleteData = async (id, item) => {
    try {
      setLoading(true)
      const response = axios.delete(`${url}${id}/`, item)
      if (response.status === 204) {
        setData([...data, response.data])
        setLoading(false)
        setMessage('Data deleted 😱')
        setError(false)
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
    data,
    postData,
    updateData,
    deleteData,
    loading,
    error,
    message,
    setMessage,
  }
}

export { useAxios }
