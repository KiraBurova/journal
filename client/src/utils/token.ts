const TOKEN_KEY = 'token'

export const saveToken = (token: string) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token)
    }
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const deleteTokens = () => {
    localStorage.removeItem(TOKEN_KEY)
}
