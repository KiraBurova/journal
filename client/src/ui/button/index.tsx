/* eslint-disable react/button-has-type */
import * as React from 'react'

import classNames from 'classnames'

import styles from './styles.scss'

export interface IButtonProps {
  primary?: boolean
  secondary?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: React.ReactNode
  onClick: () => void
}

const Button = ({
  children, type = 'button', primary = true, secondary,  disabled, onClick,
}: IButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    className={classNames(styles.button, {
      [styles.primary]: primary,
      [styles.secondary]: secondary,
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button