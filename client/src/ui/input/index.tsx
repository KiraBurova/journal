import * as React from 'react'

import styles from './styles.scss'

export interface IInputProps {
  id: string
  label: string
  placeholder?: string
}

const Input = ({ id, label, placeholder }: IInputProps) => (
  <label htmlFor={id} className={styles.label}>
      {label}
      <input className={styles.input} id={id} placeholder={placeholder} />
  </label>
)

export default Input