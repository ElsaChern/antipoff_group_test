import { Link } from "react-router-dom";
import { Form, FormButton, FormControl, FormInput, FormLabel, FormTitle, FormWrapper, LoginText } from "./styled";
import { InputIcon } from "./styled";
import openEye from "../../icons/open_eye.svg"
import closeEye from "../../icons/eye-slash.svg"
import { useState } from "react";

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordInput = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <FormWrapper>
            <Form>
                <FormTitle>Вход</FormTitle>
                <FormControl>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormInput></FormInput>
                    <FormLabel>Пароль</FormLabel>
                    <FormInput type={passwordShown ? "text" : "password" } />
                    <InputIcon onClick={togglePasswordInput}>
                        { passwordShown ? <img src={openEye} alt="SVG logo" /> : <img src={closeEye} alt="SVG logo" /> }
                    </InputIcon>
                </FormControl>
                <FormButton>Войти</FormButton>
            </Form>
            <LoginText>Впервые здесь? <Link to="/signup">Зарегистрируйтесь</Link></LoginText>
        </FormWrapper>
    );

};

export default SignIn;