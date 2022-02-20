import { EditorState } from 'draft-js'
import React from 'react'

import StyleButton from './StyleButton'

import styles from './styles.module.scss'

const INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
]

interface IInlineStyleControls {
    editorState: EditorState
    onToggle: (style: string) => void
}

const InlineStyleControls = ({
    editorState,
    onToggle,
}: IInlineStyleControls) => {
    const currentStyle = editorState.getCurrentInlineStyle()

    return (
        <div className={styles.RichEditorControls}>
            {INLINE_STYLES.map(type => (
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            ))}
        </div>
    )
}

export default InlineStyleControls
