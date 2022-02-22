import * as jwt from 'jsonwebtoken'

export const decodedToken = req => {
    const header = req.req.headers.authorization

    if (header) {
        const token = header.replace('Bearer ', '')
        const decoded = jwt.verify(token, 'supersecret')
        return decoded
    }
    return null
}
