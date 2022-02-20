import React from 'react'

import { EditorState } from 'draft-js'

import StyleButton from './StyleButton'

import styles from './styles.module.scss'

const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'Blockquote', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'Code Block', style: 'code-block' },
]

interface IBlockStyleControls {
    editorState: EditorState
    onToggle: (style: string) => void
}

const BlockStyleControls = ({ editorState, onToggle }: IBlockStyleControls) => {
    const selection = editorState.getSelection()
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType()
    return (
        <div className={styles.RichEditorControls}>
            {BLOCK_TYPES.map(type => (
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            ))}
        </div>
    )
}

export default BlockStyleControls
