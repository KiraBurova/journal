import * as React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import MainNavBar from './index'

export default {
    title: 'Main Navbar',
    component: MainNavBar,
} as ComponentMeta<typeof MainNavBar>

export const Basic: ComponentStory<typeof MainNavBar> = args => (
    <MainNavBar {...args} />
)
