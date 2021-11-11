import React from 'react'
import PropTypes from 'prop-types'
// * Components
import { Form, InputTime } from '..'

const ScheduleForm = () => {
  return (
    <Form title='Add Schedule'>
      <InputTime />
      <InputTime />
    </Form>
  )
}

ScheduleForm.defaultProps = {}

ScheduleForm.propTypes = {}

export { ScheduleForm }
