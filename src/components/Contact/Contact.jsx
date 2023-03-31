import { Field, Form, Formik } from 'formik'
import React from 'react'
import { contactSchema } from '../../assets/utilities/contactSchema'
import s from './Contact.module.css'
import working from '../../assets/images/working.png'

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
    <div className={s.divSupremo}>
      <img src={working} alt='contact' className={s.img} />
    <div className={`container d-flex flex-wrap ${s.box}`}>
      <div className={`${s.div} col`}>
        <h4>Get in touch</h4>
        <p>I’m very approachable and would love to speak to you. Feel free to send me an email. Follow me in social media or simply complete the enquiry form.</p>

      </div>
      <div className='col'>
        <div className='mb-5'>
        <h4>Send me a message</h4>

        </div>
        <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={hanldeSubmit}
        >
          {
          ({ isSubmitting, errors, isValid, touched }) => (
            <Form className={` ${s.formContainer}`}>
              <div className={`{mb-3 ${s.namePhone}`}>
                <Field className={`form-control mb-3 ${s.input}`} name='name' placeholder='your name' />
                {errors.name && touched.name && <div className={s.error}>{errors.name}</div>}
              </div>
              <Field className={`form-control mb-4 ${s.input}`} name='email' placeholder={'youremail@email.com'} />
              {errors.email && touched.email && <div className={s.error}>{errors.email}</div>}
              <Field className={`pb-5 form-control mb-4 ${s.inputMessage}`} name='message' placeholder='your message' />
              {errors.message && touched.message && <div className={s.error}>{errors.message}</div>}
              <button type='submit' className={s.btn} disabled={!isValid || isSubmitting}>Send message</button>
            </Form>)
        }
        </Formik>
      </div>
    </div>
    </div>
  )
}

export default Contact
