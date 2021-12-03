const URL_BASE = 'https://healt-tech-back.herokuapp.com/api'

const URL_DOCTOR_SCHEDULE = `${URL_BASE}/horarioMedico/`
const URL_APPOINTMENT_SCHEDULE = `${URL_BASE}/horario/`
const URL_SPECIALTY = `${URL_BASE}/especialidad/`
const URL_AGENDAS = `${URL_BASE}/agenda/`
const URL_ROOMS = `${URL_BASE}/consultorio/`
const URL_ADMIN = `${URL_BASE}/administrador/`
const URL_DOCTORS = `${URL_BASE}/medico/`
const URL_DOCTORS_LIST = `${URL_BASE}/cita/traerMedicos`
const URL_DOCTOR_SCHEDULES = `${URL_BASE}/cita/traerHorarios`
const URL_PATIENT = `${URL_BASE}/paciente/`
const URL_PATIENT_APPOINTMENTS = `${URL_BASE}/traerCita`
const URL_USERS = `${URL_BASE}/usuarios/`
const URL_APPOINTMENTS = `${URL_BASE}/cita/`
const URL_LOGIN = `${URL_BASE}/login/`
const URL_DOCTOR_LIST = `${URL_BASE}/medico/traerAgendaMedico`
const URL_SET_STATE_DOCTOR_LIST = `${URL_BASE}/cita/`
const URL_PATIENT_ID = `${URL_BASE}/cita/consultarIdPaciente`
const URL_CERTIFIED = `${URL_BASE}/paciente/generarCertificadoPaciente`

export {
  URL_DOCTOR_SCHEDULE,
  URL_DOCTOR_SCHEDULES,
  URL_SPECIALTY,
  URL_ROOMS,
  URL_DOCTORS,
  URL_DOCTORS_LIST,
  URL_ADMIN,
  URL_USERS,
  URL_APPOINTMENT_SCHEDULE,
  URL_AGENDAS,
  URL_PATIENT,
  URL_APPOINTMENTS,
  URL_PATIENT_APPOINTMENTS,
  URL_LOGIN,
  URL_SET_STATE_DOCTOR_LIST,
  URL_DOCTOR_LIST,
  URL_PATIENT_ID,
  URL_CERTIFIED,
}
