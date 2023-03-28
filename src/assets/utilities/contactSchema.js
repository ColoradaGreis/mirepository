import * as yup from 'yup'

const errorMessages = {
  required: 'required',
  email: 'invalid email',
  min: 'too short',
  max: 'too long'
}

export const contactSchema = yup.object().shape({
  name: yup.string().required(errorMessages.required).min(2, errorMessages.min).max(50, errorMessages.max),
  email: yup.string().required(errorMessages.required).email(errorMessages.email),
  message: yup.string().required(errorMessages.required).min(10, errorMessages.min).max(300, errorMessages.max)
})
