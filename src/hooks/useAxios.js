import { useState } from 'react'
import axios from 'axios'

const URL_BASE = 'https://healt-tech-back.herokuapp.com/api/'

const useAxios = (url) => {
  const [data, setData] = useState([])

  const getData = () => {
    axios
      .get(`${URL_BASE}${url}`)
      .then((res) => res.data)
      .then((response) => {
        setData(response)
      })
  }

  return { data, getData }
}

export { useAxios }
