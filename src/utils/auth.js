
const TokenKey = 'access_token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}
export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}
export function delToken() {
  return localStorage.removeItem(TokenKey)
}
export function clearAllStorage(){
  return localStorage.clear()
}

// 判断access_token是否有效
export function isValidToken() {
  let token = getToken();
  let data = {
    [TokenKey]:token
  };
  if(token){
    // let result = getTokenValid(data);
    // 异步请求，判断token是否有效
    return true;
  }else{
    return false;
  }
}
