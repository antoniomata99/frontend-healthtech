import React, { useState } from 'react'
import PropTypes from 'prop-types'
// * Components
import { Form, InputTime } from '..'

const ScheduleForm = ({
  id,
  postData,
  updateData,
  initialTime,
  finishTime,
  update,
  handleModal,
}) => {
  const [startTime, setStartTime] = useState(initialTime)
  const [endTime, setEndTime] = useState(finishTime)

  const handlePost = (e) => {
    e.preventDefault()
    postData({ hora_inicio: startTime, hora_fin: endTime })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    updateData(id, { id_horario_medico: id, hora_inicio: startTime, hora_fin: endTime })
    handleModal()
  }

  return (
    <Form
      title={update ? '' : 'Add Schedule'}
      handleData={!!update ? handleUpdate : handlePost}
      isUpdate={!!update ? true : false}
    >
      {id && <h1 className='Identifier'>{id}</h1>}
      <InputTime setData={setStartTime} defaultValue={startTime} />
      <InputTime setData={setEndTime} defaultValue={endTime} />
    </Form>
  )
}

ScheduleForm.defaultProps = {
  postData: null,
  initialTime: '',
  finishTime: '',
  update: true,
  handleModal: null,
  id: null,
}

ScheduleForm.propTypes = {
  postData: PropTypes.func,
  initialTime: PropTypes.string,
  finishTime: PropTypes.string,
  update: PropTypes.bool,
  handleModal: PropTypes.func,
  id: PropTypes.string,
}

export { ScheduleForm }
