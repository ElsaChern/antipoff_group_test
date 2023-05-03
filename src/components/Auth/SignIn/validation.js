const validation = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Поле не может быть пустым"
    } else if (!values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
        errors.email = "Неверный формат"
    } 

    if (!values.password) {
        errors.password = "Поле не может быть пустым"
    } 
    
    return errors;
}


export default validation;