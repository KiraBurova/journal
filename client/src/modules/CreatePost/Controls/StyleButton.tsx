import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

interface IStyleButton {
    style: string
    onToggle: (style: string) => void
    active: boolean
    label: string
}

const StyleButton = ({ onToggle, active, style, label }: IStyleButton) => {
    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        onToggle(style)
    }

    return (
        <span
            className={classNames(styles.RichEditorStyleButton, {
                [styles.RichEditorRichEditorStyleButtonActiveButton]: active,
            })}
            onMouseDown={handleToggle}
            role="button"
            tabIndex={0}>
            {label}
        </span>
    )
}

export default StyleButton
