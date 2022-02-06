import * as React from 'react'

import classNames from 'classnames'

import styles from './styles.module.scss'

export interface IInputProps {
    id: string
    label: string
    placeholder?: string
    type?: 'input' | 'password'
    className?: string
    onChange: () => void
    onBlur: () => void
}

const Input = ({
    id,
    label,
    placeholder,
    type = 'input',
    className,
    onChange,
    onBlur,
}: IInputProps) => (
    <label htmlFor={id} className={classNames(className, styles.label)}>
        {label}
        <input
            className={styles.input}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
        />
    </label>
)

export default Input
