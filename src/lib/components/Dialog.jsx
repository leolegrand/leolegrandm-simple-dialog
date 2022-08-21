// REACT
import React, { useState, useEffect } from 'react'

// MEDIA
import cookiesIcon from './cookies.png'
import succesIcon from './succes.png'
import errorIcon from './error-message.png'

// CSS
import './modal.css'

/**
 * React component, a dialog modal with a bit of customisations
 * @param { {modal: String|object, closeIcon: Boolean, callToAction: Boolean, allowCustomization: Boolean, ctaCallback: Function } }
 * @param modal -  
To use pre-created modals, use strings with the words "errors", "'cookies" or "success". To use a custom modal, pass an object that has the following properties: 'title', 'icon', 'altText', 'content', 'cta' and put the props allowCustomization to true.
 * @param closeIcon - A boolean, the cross icon will appear or not depending on true or false.
 * @param callToAction - A boolean, the call-to-action button will appear or not depending on true or false.
 * @param allowCustomization - A boolean, if set to true, you can pass your own object in the modalType props.
 * @param callToActionCallback - The function that is called when you press the call-to-action button & cross icon.
 * @returns { React.ReactElement } A dialog component
 */
const Dialog = ({
  modal,
  closeIcon,
  callToAction,
  allowCustomization,
  callToActionCallback,
}) => {
  const [shown, setShown] = useState(true)

  // Defaults modal that the user can pick from
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

  // toggle if the dialog is visible or not, a callback function can be added on the close/cta button
  const handleShown = () => {
    setShown(false)
    if (callToActionCallback) {
      callToActionCallback()
    }
  }

  // ON ESCAPE KEYPRESS, THE MODAL IS CLOSED
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleShown()
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })

  let option

  if (allowCustomization) {
    option = modal
  } else {
    let selectedModalOption = modalOptions.filter((i) => i.title === modal)
    option = selectedModalOption[0]
  }

  if (shown) {
    return (
      <dialog open={true} className="modal__bg" id="myDialog">
        <div className="modal" id="modal">
          {closeIcon ? (
            <button onClick={() => handleShown()} className="modal__close-btn">
              ✖
            </button>
          ) : null}
          <img className="modal__img" src={option.icon} alt={option.altText} />
          <p className="modal__body">{option.content}</p>
          {callToAction ? (
            <button
              onClick={() => handleShown()}
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
