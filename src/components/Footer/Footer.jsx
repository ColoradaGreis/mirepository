import React from 'react'
import about from '../../assets/images/aboutw.png'
import home from '../../assets/images/homew.png'
import work from '../../assets/images/workw.png'
import contact from '../../assets/images/contactw.png'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import s from './Footer.module.css'

function Footer () {
  const images = [{ img: home, alt: 'Home' }, { img: about, alt: 'About' }, { img: work, alt: 'Work' }, { img: contact, alt: 'Contact' }]
  const socialMedia = [{ img: linkedin, alt: 'Linkedin' }, { img: instagram, alt: 'Instagram' }, { img: twitter, alt: 'Twitter' }]
  return (
    <div className={`${s.footer} d-flex flex-column justify-content-center`}>
        <div className='d-flex flex-wrap justify-content-center gap-5 py-5 mb-2'>
            {images.map((image, index) => (
                <div key={index} className='px-3 d-flex'>
                    <img className={s.img} src={image.img} alt={image.alt} />
                    <div className='px-3'>
                        <h1 className={s.h1}>{image.alt}</h1>
                    </div>
                </div>
            ))}

        </div>
        <div className='pt-5'>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
                <div className='px-3 d-flex'>
                    <img className={s.github} src={github} alt='Github' />
                </div>
                {socialMedia.map((image, index) => (
                    <div key={index} className='px-3 d-flex'>
                        <img className={s.images} src={image.img} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer
