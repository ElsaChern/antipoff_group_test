import { Form, FormButton, FormControl, FormInput, FormLabel, FormTitle, FormWrapper, LoginText } from "./styled";

const SignUp = () => {
    return (
        <FormWrapper>
            <Form>
                <FormTitle>Регистрация</FormTitle>
                <FormControl>
                    <FormLabel>Имя</FormLabel>
                    <FormInput></FormInput>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormInput></FormInput>
                    <FormLabel>Пароль</FormLabel>
                    <FormInput type="password"></FormInput>
                    <FormLabel>Подтвердите пароль</FormLabel>
                    <FormInput type="password"></FormInput>
                </FormControl>
                <FormButton>Зарегистрироваться</FormButton>
            </Form>
            <LoginText>Уже зарегистрированы? Тогда Вам сюда:</LoginText>

        </FormWrapper>
    );

};

export default SignUp;