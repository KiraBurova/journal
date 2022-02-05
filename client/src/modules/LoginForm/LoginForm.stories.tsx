import * as React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginForm from './index'

export default {
    title: 'Login Form',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>

export const Basic: ComponentStory<typeof LoginForm> = () => <LoginForm />
