import { Link } from "react-router-dom";
import { Form, FormButton, FormControl, FormInput, FormLabel, FormTitle, FormWrapper, LoginText } from "./styled";

const SignIn = () => {
    return (
        <FormWrapper>
            <Form>
                <FormTitle>Вход</FormTitle>
                <FormControl>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormInput></FormInput>
                    <FormLabel>Пароль</FormLabel>
                    <FormInput type="password"></FormInput>
                </FormControl>
                <FormButton>Войти</FormButton>
            </Form>
            <LoginText>Впервые здесь? <Link to="/signup">Зарегистрируйтесь</Link></LoginText>
        </FormWrapper>
    );

};

export default SignIn;