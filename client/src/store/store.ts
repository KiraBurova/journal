import { createEvent, createStore } from 'effector'

export const $tokenStore = createStore('')

export const setTokenEvent = createEvent<string>('set token')

$tokenStore.on(setTokenEvent, (_state, token) => token)
