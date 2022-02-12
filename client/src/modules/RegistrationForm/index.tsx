import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Formik, FormikProps, ErrorMessage, Form, Field } from 'formik'

import Button from '../../ui/button'
import Input from '../../ui/input'

import { useRegisterUserMutation, UserInput } from '../../graphql/generated'

import validation from './validation'

import styles from './styles.module.scss'

const RegistrationForm = () => {
    const router = useRouter()
    const [register, { loading }] = useRegisterUserMutation({
        variables: {
            user: {
                username: '',
                email: '',
                password: '',
            },
        },
    })
    const handleSubmit = async (values: UserInput) => {
        try {
            await register({ variables: { user: values } })
            router.push('/login')
            toast('Registration was successful!')
        } catch (error) {
            toast(error.message)
        }
    }

    return (
        <div className={styles.container} data-testid="registration-form">
            <h1 className={styles.heading}>Create new account</h1>
            <p>
                Already a member? <Link href="/login">Log in</Link>
            </p>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
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
                            id="username"
                            name="username"
                            label="Username"
                            component={Input}
                            onChange={handleChange}
                            onBlur={handleBlur}
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

export default RegistrationForm
