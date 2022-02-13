import isServer from './isServer'

const TOKEN_KEY = 'token'

export const saveToken = (token: string) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token)
    }
}

export const getToken = () => {
    if (!isServer()) {
        return localStorage.getItem(TOKEN_KEY)
    }
    return ''
}
export const deleteTokens = () => {
    localStorage.removeItem(TOKEN_KEY)
}
