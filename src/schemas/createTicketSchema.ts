import * as yup from 'yup'

const createTicketSchema = yup.object().shape({
  title: yup.string().required('common.errors.title.required'),
  description: yup.string(),
  priority: yup.string(),
  tags: yup.array(),
})

export { createTicketSchema }