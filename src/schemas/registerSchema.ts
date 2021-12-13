import * as yup from 'yup'

const registerSchema = yup.object().shape({
  firstName: yup.string().required('common.errors.firstName.required'),
  lastName: yup.string().required('common.errors.lastName.required'),
  email: yup.string().email('common.errors.email.format').required('common.errors.email.required'),
  password: yup
    .string()
    .min(8, 'common.errors.password.min')
    .required('common.errors.password.required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'common.errors.confirmPassword.dontMatch')
    .required('common.errors.confirmPassword.required'),
})

export { registerSchema }
