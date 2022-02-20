import React, { useRef } from 'react'
import { Formik, FormikProps, ErrorMessage, Form, Field } from 'formik'
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

import { PostInput } from '../../graphql/generated'
import Input from '../../ui/input'

import styles from './styles.module.scss'
import Button from '../../ui/button'
import BlockStyleControls from './Controls/BlockStyleControls'
import InlineStyleControls from './Controls/InlineStyleControls'

const CreatePost = () => {
    const editorRef = useRef<Editor>()
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty(),
    )
    let className = styles.RichEditorEditor
    const contentState = editorState.getCurrentContent()
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ` ${styles.RichEditorHidePlaceholder}`
        }
    }

    const handleSubmit = () => {}

    const handleFocus = () => {
        editorRef.current.focus()
    }

    const toggleBlockType = (blockType: string) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType))
    }

    const toggleInlineStyle = (inlineStyle: string) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))
    }

    return (
        <Formik
            initialValues={{ title: '', content: '' }}
            onSubmit={handleSubmit}
            enableReinitialize>
            {({
                isValid,
                handleChange,
                handleBlur,
            }: FormikProps<PostInput>) => (
                <Form>
                    <Field
                        id="title"
                        name="title"
                        label="Title"
                        component={Input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span
                        data-testid="title-error"
                        className={styles.errorMessage}>
                        <ErrorMessage name="title" />
                    </span>
                    <div className={styles.RichEditorRoot}>
                        <BlockStyleControls
                            editorState={editorState}
                            onToggle={toggleBlockType}
                        />
                        <InlineStyleControls
                            editorState={editorState}
                            onToggle={toggleInlineStyle}
                        />
                        <div
                            className={className}
                            role="button"
                            tabIndex={0}
                            onClick={handleFocus}
                            onKeyDown={handleFocus}>
                            <Editor
                                spellCheck
                                ref={editorRef}
                                editorState={editorState}
                                onChange={setEditorState}
                                placeholder="Tell a story..."
                            />
                        </div>
                    </div>
                    <Button
                        dataTestId="submit-button"
                        disabled={!isValid}
                        className={styles.submitButton}
                        type="submit">
                        Create
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default CreatePost
