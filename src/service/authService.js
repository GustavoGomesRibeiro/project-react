export const tokenKey = '@airbnb-Token';
export const isAuthenticated = () => localStorage.getItem (tokenKey) !== null;
export const getToken = () => JSON.parse(localStorage.getItem(tokenKey));
export const signIn = token => {JSON.parse(localStorage.setItem(tokenKey, token))};
export const logout = () => JSON.parse(localStorage.removeItem(tokenKey));