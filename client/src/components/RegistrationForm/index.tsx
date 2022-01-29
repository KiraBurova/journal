import * as React from 'react'

import {
    Formik,
    // FormikHelpers,
    FormikProps,
    ErrorMessage,
    Form,
    Field,
    // FieldProps,
} from 'formik'

import Button from '../../ui/button'
import Input from '../../ui/input'

import validation from './validation'
import { IFormValues } from './types'

import styles from './styles.module.scss'

export interface IRegistrationForm {}

const RegistrationForm = () => {
    const handleSubmit = () => {}

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Create new account</h1>
            <p>Already a member? Log in</p>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validation}
                onSubmit={handleSubmit}
                enableReinitialize>
                {({ isValid, handleChange }: FormikProps<IFormValues>) => (
                    <Form className={styles.form}>
                        <Field
                            className={styles.input}
                            id="username"
                            name="username"
                            label="Username"
                            component={Input}
                            onChange={handleChange}
                        />
                        <span
                            data-testid="username-error"
                            className={styles.errorMessage}>
                            <ErrorMessage name="username" />
                        </span>
                        <Field
                            className={styles.input}
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            component={Input}
                            onChange={handleChange}
                        />
                        <span
                            data-testid="email-error"
                            className={styles.errorMessage}>
                            <ErrorMessage name="email" />
                        </span>
                        <Field
                            className={styles.input}
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            component={Input}
                            onChange={handleChange}
                        />
                        <span
                            data-testid="password-error"
                            className={styles.errorMessage}>
                            <ErrorMessage name="password" />
                        </span>
                        <Button
                            dataTestId="submit-button"
                            disabled={!isValid}
                            className={styles.submitButton}
                            type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegistrationForm
