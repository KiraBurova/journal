import * as React from 'react'

import styles from './styles.scss'

export interface IInputProps {
  id: string
  label: string
  placeholder?: string
  type: 'input' | 'password'
}

const Input = ({ id, label, placeholder, type = 'input' }: IInputProps) => (
  <label htmlFor={id} className={styles.label}>
      {label}
      <input className={styles.input} id={id} type={type} placeholder={placeholder} />
  </label>
)

export default Input