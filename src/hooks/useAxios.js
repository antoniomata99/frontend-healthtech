import { useState, useEffect } from 'react'
import axios from 'axios'

const URL_BASE = 'https://healt-tech-back.herokuapp.com/api/'

const useAxios = (url) => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    getData()
  }, [data])

  //Create function

  const postData = (item) => {
    const response = axios.post(`${URL_BASE}${url}`, item)
    setData([...data, item])
  }

  //Read function
  const getData = () => {
    axios
      .get(`${URL_BASE}${url}`)
      .then((res) => res.data)
      .then((response) => {
        setData(response)
      })
  }

  //Update function
  const updateData = (id, item) => {
    axios.put(`${URL_BASE}${url}${id}`, item)
  }

 
  //Delete fuction
  const deleteData = (id, item) =>{
    axios.del(`${URL_BASE}${url}${id}`, item)
  }


  return { data, getData, postData, updateData }
}

export { useAxios }
