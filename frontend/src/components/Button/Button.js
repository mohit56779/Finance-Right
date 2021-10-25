import React from 'react'

import styles from './Button.module.css'

export default function Button({
    onClick = () => { },
    onBlur = () => { },
    onFocus = () => { },
    onMouseOver = () => { },
    type,
    disabled,
    activeClass,
    className,
    children

  }) {
  return (
    <button
      disabled={disabled}
      onMouseOver={onMouseOver}
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      onClick={() => onClick()}
      className={`${styles.button} ${styles[className]} ${disabled ? '' : styles[activeClass]}`}
    >
      {children}
    </button>
  )
}