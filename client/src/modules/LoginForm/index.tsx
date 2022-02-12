import * as React from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { Formik, FormikProps, ErrorMessage, Form, Field } from 'formik'

import Button from '../../ui/button'
import Input from '../../ui/input'
import { useLoginUserMutation, UserInput } from '../../graphql/generated'
import { saveToken } from '../../utils/token'

import validation from './validation'

import styles from './styles.module.scss'

const LoginForm = () => {
    const [login, { loading }] = useLoginUserMutation({
        variables: {
            user: {
                email: '',
                password: '',
            },
        },
    })
    const handleSubmit = async (values: UserInput) => {
        try {
            const { data } = await login({ variables: { user: values } })
            saveToken(data.LoginUser)
        } catch (error) {
            toast(error.message)
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Log in</h1>
            <p>
                New here? <Link href="/registration">Sign up</Link>
            </p>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validation}
                onSubmit={handleSubmit}
                enableReinitialize>
                {({
                    isValid,
                    handleChange,
                    handleBlur,
                }: FormikProps<UserInput>) => (
                    <Form className={styles.form}>
                        <Field
                            className={styles.input}
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            component={Input}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            onBlur={handleBlur}
                        />
                        <span
                            data-testid="password-error"
                            className={styles.errorMessage}>
                            <ErrorMessage name="password" />
                        </span>
                        <Button
                            dataTestId="submit-button"
                            disabled={!isValid || loading}
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
