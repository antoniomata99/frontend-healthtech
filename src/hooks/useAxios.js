import { useState, useEffect } from 'react'
import axios from 'axios'

const URL_BASE = 'https://healt-tech-back.herokuapp.com/api/'

const useAxios = (url) => {
  const [data, setData] = useState([]) // * Data state
  const [loading, setLoading] = useState(false) // * Loading state
  const [error, setError] = useState(false) // * Error state

  useEffect(() => {
    getData() // * Reload data when component is mounted or data state changes
  }, [data])

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
        setError(true) // * If the status is not 201
      }
    } catch (error) {
      setError(true)
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
        setError(true) // * If the status is not 201
      }
    } catch (error) {
      setError(true)
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
        setError(true) // * If the status is not 201
      }
    } catch (error) {
      setError(true)
    }
  }

  return { data, getData, postData, updateData, deleteData, loading, error }
}

export { useAxios }
