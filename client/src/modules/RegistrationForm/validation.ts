import { object, SchemaOf, string } from 'yup'

import { IFormValues } from './types'

const validation: SchemaOf<IFormValues> = object({
    username: string().required('Please enter username'),
    email: string().required('Please enter email'),
    password: string().required('Please enter password'),
})

export default validation
