import * as React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import RegistrationForm from './index'

export default {
    title: 'Registration Form',
    component: RegistrationForm,
} as ComponentMeta<typeof RegistrationForm>

export const Basic: ComponentStory<typeof RegistrationForm> = () => (
    <RegistrationForm />
)
