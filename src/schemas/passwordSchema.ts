import * as yup from 'yup'

const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'common.errors.password.min')
    .required('common.errors.password.required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'common.errors.confirmPassword.dontMatch')
    .required('common.errors.confirmPassword.required'),
})

export { passwordSchema }
