import { Field, Form, Formik } from 'formik'
import React from 'react'
import { contactSchema } from '../../assets/utilities/contactSchema'
import s from './Contact.module.css'

function Contact () {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  }
  const hanldeSubmit = async (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }
  return (
    <div className={`container d-flex flex-wrap ${s.box}`}>
      <div className='col'>
        <h5>Get in touch</h5>
        <p>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>

      </div>
      <div className='col'>
        <h5>Send a message</h5>
        <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={hanldeSubmit}
        >
          {
          ({ isSubmitting, errors, isValid, touched }) => (
            <Form className={s.formContainer}>
              <div className={s.namePhone}>
                <Field className={s.inputNamePhone} name='name' placeholder=' your name' />
                {errors.name && touched.name && <div className={s.error}>{errors.name}</div>}
              </div>
              <Field className={s.input} name='email' placeholder={'youremail@email.com'} />
              {errors.email && touched.email && <div className={s.error}>{errors.email}</div>}
              <Field className={`pb-5 ${s.input}`} name='message' placeholder='your message' />
              {errors.message && touched.message && <div className={s.error}>{errors.message}</div>}
              <button type='submit' className={s.btn} disabled={!isValid || isSubmitting}>Contact</button>
            </Form>)
        }
        </Formik>
      </div>
    </div>
  )
}

export default Contact
