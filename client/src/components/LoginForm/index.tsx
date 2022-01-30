import * as React from 'react'
import Link from 'next/link'

import { Formik, FormikProps, ErrorMessage, Form, Field } from 'formik'

import Button from '../../ui/button'
import Input from '../../ui/input'

import validation from './validation'
import { IFormValues } from './types'

import styles from './styles.module.scss'

export interface ILoginFormForm {}

const LoginForm = () => {
    const handleSubmit = () => {}

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Log in</h1>
            <p>
                New here? <Link href="/registration">Sign up</Link>
            </p>
            <Formik
                initialValues={{ username: '', password: '' }}
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

export default LoginForm
