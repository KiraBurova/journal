import { object, string } from 'yup'

const validation = object({
    username: string()
        .max(20, 'Username should not be more than 20 characters')
        .required('Please enter username'),
    email: string().required('Please enter email'),
    password: string().required('Please enter password'),
})

export default validation
