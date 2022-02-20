import React from 'react'
import { Formik, FormikProps, ErrorMessage, Form, Field } from 'formik'

import { PostInput } from '../../graphql/generated'
import Input from '../../ui/input'

import styles from './styles.module.scss'
import Button from '../../ui/button'

const CreatePost = () => {
    const handleSubmit = () => {}
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
