'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

require('core-js/modules/web.dom-collections.iterator.js')

var _react = _interopRequireWildcard(require('react'))

var _cookies = _interopRequireDefault(require('./cookies.png'))

var _succes = _interopRequireDefault(require('./succes.png'))

var _errorMessage = _interopRequireDefault(require('./error-message.png'))

require('./modal.css')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null
  var cacheBabelInterop = new WeakMap()
  var cacheNodeInterop = new WeakMap()
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop
  })(nodeInterop)
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache(nodeInterop)
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

// REACT
// MEDIA
// CSS

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
const Dialog = (_ref) => {
  let {
    modal,
    closeIcon,
    callToAction,
    allowCustomization,
    callToActionCallback,
  } = _ref
  const [shown, setShown] = (0, _react.useState)(true) // Defaults modal that the user can pick from

  const modalOptions = [
    {
      title: 'cookies',
      icon: _cookies.default,
      altText: 'cookies image',
      content:
        'We use cookies for improving user experience, analytics and marketing.',
      cta: 'Yummy !',
    },
    {
      title: 'succes',
      icon: _succes.default,
      altText: 'check image',
      content: 'Your request has been successfully completed.',
      cta: 'Got it !',
    },
    {
      title: 'error',
      icon: _errorMessage.default,
      altText: 'error image',
      content: 'Oops ! Something went wrong.',
      cta: 'Try again !',
    },
  ] // toggle if the dialog is visible or not, a callback function can be added on the close/cta button

  const handleShown = () => {
    setShown(false)

    if (callToActionCallback) {
      callToActionCallback()
    }
  } // ON ESCAPE KEYPRESS, THE MODAL IS CLOSED

  ;(0, _react.useEffect)(() => {
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
    return /*#__PURE__*/ _react.default.createElement(
      'dialog',
      {
        open: true,
        className: 'modal__bg',
        id: 'myDialog',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'modal',
          id: 'modal',
        },
        closeIcon
          ? /*#__PURE__*/ _react.default.createElement(
              'button',
              {
                onClick: () => handleShown(),
                className: 'modal__close-btn',
              },
              '\u2716'
            )
          : null,
        /*#__PURE__*/ _react.default.createElement('img', {
          className: 'modal__img',
          src: option.icon,
          alt: option.altText,
        }),
        /*#__PURE__*/ _react.default.createElement(
          'p',
          {
            className: 'modal__body',
          },
          option.content
        ),
        callToAction
          ? /*#__PURE__*/ _react.default.createElement(
              'button',
              {
                onClick: () => handleShown(),
                className: 'modal__cta modal__cta--' + option.title,
              },
              option.cta
            )
          : null
      )
    )
  } else {
    return /*#__PURE__*/ _react.default.createElement('dialog', {
      open: false,
    })
  }
}

exports.default = Dialog
