import * as yup from 'yup'

const accountDetailsSchema = yup.object().shape({
  firstName: yup.string().required('common.errors.firstName.required'),
  lastName: yup.string().required('common.errors.lastName.required'),
  email: yup.string().email('common.errors.email.format').required('common.errors.email.required'),
  phoneNumber: yup.string(),
})

export { accountDetailsSchema }
