const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const errorsText = {
    required: 'Поле не может быть пустым',
    formatData: "Неверный формат",
    passwordConfirmation: "Пароли не совпадают"
}

export { emailRegexp, errorsText }