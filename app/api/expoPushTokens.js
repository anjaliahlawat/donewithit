import client from './cient'

const register = (pushToken) => client.post('/expoPushTokens', { token: pushToken})

export default register