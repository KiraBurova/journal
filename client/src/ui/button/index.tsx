/* eslint-disable react/button-has-type */
import * as React from 'react'

import classNames from 'classnames'

import styles from './styles.module.scss'

export interface IButtonProps {
    primary?: boolean
    secondary?: boolean
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    children: React.ReactNode
    onClick?: () => void
    className?: string
    dataTestId?: string
}

const Button = ({
    children,
    type = 'button',
    primary = true,
    secondary,
    disabled,
    onClick,
    className,
    dataTestId,
}: IButtonProps) => (
    <button
        data-testid={dataTestId}
        type={type}
        disabled={disabled}
        className={classNames(className, styles.button, {
            [styles.primary]: primary,
            [styles.secondary]: secondary,
            [styles.disabled]: disabled,
        })}
        onClick={onClick}>
        {children}
    </button>
)

export default Button
