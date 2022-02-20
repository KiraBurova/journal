import React from 'react'

import styles from './styles.module.scss'

interface IStyleButton {
    style: string
    onToggle: (style: string) => void
    active: boolean
    label: string
}

const StyleButton = ({ onToggle, active, style, label }: IStyleButton) => {
    let className = styles.RichEditorStyleButton
    if (active) {
        className += ` ${styles.RichEditorRichEditorStyleButtonActiveButton}`
    }

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault()
        onToggle(style)
    }

    return (
        <span
            className={className}
            onMouseDown={handleToggle}
            role="button"
            tabIndex={0}>
            {label}
        </span>
    )
}

export default StyleButton
