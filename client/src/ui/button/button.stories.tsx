import * as React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './index'

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = args => (
    <Button primary {...args}>
        Primary
    </Button>
)

export const Regular: ComponentStory<typeof Button> = args => (
    <Button {...args}>Click</Button>
)

export const Submit: ComponentStory<typeof Button> = args => (
    <Button {...args} type="submit">
        Submit
    </Button>
)
