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
import { Link } from 'react-router-dom'

function Footer () {
  const images = [{ img: home, alt: 'Home', link: '/' }, { img: about, alt: 'About', link: 'about' }, { img: work, alt: 'Work', link: 'work' }, { img: contact, alt: 'Contact', link: 'contact' }]
  const socialMedia = [{ img: linkedin, alt: 'Linkedin', link: 'https://www.linkedin.com/in/graciana-baratti-7b918116b/' }, { img: instagram, alt: 'Instagram', link: 'https://www.instagram.com/graciana.baratti/' }, { img: twitter, alt: 'Twitter', link: 'https://twitter.com/BarattiGraciana' }]
  return (
    <div className={`${s.footer} d-flex flex-column justify-content-center`}>
        <div className='d-flex flex-wrap justify-content-center gap-5 py-5 mb-2'>
            {images.map((image, index) => (
                <Link to={image.link} key={index} className='px-3 d-flex text-decoration-none text-muted '>
                    <img className={s.img} src={image.img} alt={image.alt} />
                    <div className='px-3'>
                        <h1 className={s.h1}>{image.alt}</h1>
                    </div>
                </Link>
            ))}

        </div>
        <div className='pt-5'>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
                <a href={'https://github.com/ColoradaGreis'} target='_blank' rel='noreferrer' className='px-3 d-flex'>
                    <img className={s.github} src={github} alt='Github' />
                </a>
                {socialMedia.map((image, index) => (
                    <a href={image.link} key={index} className='px-3 d-flex' target='_blank' rel='noreferrer'>
                        <img className={s.images} src={image.img} alt={image.alt} />
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer
