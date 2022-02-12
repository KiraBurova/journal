import { object, string } from 'yup'

const validation = object({
    email: string().required('Please enter email'),
    password: string().required('Please enter password'),
})

export default validation
