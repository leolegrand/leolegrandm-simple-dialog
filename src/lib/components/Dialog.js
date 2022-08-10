import React, { useState, useEffect } from 'react'
import './modal.css'
import cookiesIcon from './cookies.png'
import succesIcon from './succes.png'
import errorIcon from './error-message.png'

const Dialog = ({ modalType, closeIcon, callToAction, optionParams }) => {
  const [shown, setShown] = useState(true)

  const modalOptions = [
    {
      title: 'cookies',
      icon: cookiesIcon,
      altText: 'cookies image',
      content:
        'We use cookies for improving user experience, analytics and marketing.',
      cta: 'Yummy !',
    },
    {
      title: 'succes',
      icon: succesIcon,
      altText: 'check image',
      content: 'Your request has been successfully completed.',
      cta: 'Got it !',
    },
    {
      title: 'error',
      icon: errorIcon,
      altText: 'error image',
      content: 'Oops ! Something went wrong.',
      cta: 'Try again !',
    },
  ]

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        setShown(false)
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  let option

  if (optionParams) {
    option = modalType
  } else {
    let selectedModalOption = modalOptions.filter((i) => i.title === modalType)
    option = selectedModalOption[0]
  }

  if (shown) {
    return (
      <dialog open={true} className="modal__bg" id="myDialog">
        <div className="modal" id="modal">
          {closeIcon ? (
            <button
              onClick={() => setShown(false)}
              className="modal__close-btn"
            >
              ✖
            </button>
          ) : null}
          <img className="modal__img" src={option.icon} alt={option.altText} />
          <p className="modal__body">{option.content}</p>
          {callToAction ? (
            <button
              onClick={() => setShown(false)}
              className={'modal__cta modal__cta--' + option.title}
            >
              {option.cta}
            </button>
          ) : null}
        </div>
      </dialog>
    )
  } else {
    return <dialog open={false}></dialog>
  }
}

export default Dialog
