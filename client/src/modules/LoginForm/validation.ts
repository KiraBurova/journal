import { object, SchemaOf, string } from 'yup'

import { IFormValues } from './types'

const validation: SchemaOf<IFormValues> = object({
    username: string().required('Please enter username'),
    password: string().required('Please enter password'),
})

export default validation
