export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@kookmin\.ac\.kr$/

  return emailRegex.test(email)
}

export let errorResponse = {
  message: '알 수 없는 에러 발생!',
  status: 500,
}
