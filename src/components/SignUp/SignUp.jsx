import { Link } from "react-router-dom";
import { Form, FormButton, FormControl, FormInput, FormLabel, FormTitle, FormWrapper, InputIcon, LoginText } from "./styled";
import openEye from "../../icons/open_eye.svg"
import closeEye from "../../icons/eye-slash.svg"
import { useState } from "react";

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordVerification, setpasswordVerification] = useState(false);

    const togglePasswordInput = () => {
        setPasswordShown(!passwordShown);
    }

    const togglePasswordVerification = () => {
        setpasswordVerification(!passwordVerification);
    }

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
                    <FormInput type={passwordShown ? "text" : "password" }></FormInput>
                    <InputIcon onClick={togglePasswordInput}>
                        { passwordShown ? <img src={openEye} alt="SVG logo" /> : <img src={closeEye} alt="SVG logo" /> }
                    </InputIcon>
                    <FormLabel>Подтвердите пароль</FormLabel>
                    <FormInput type={passwordVerification ? "text" : "password" }></FormInput>
                    <InputIcon onClick={togglePasswordVerification}>
                        { passwordVerification ? <img src={openEye} alt="SVG logo" /> : <img src={closeEye} alt="SVG logo" /> }
                    </InputIcon>
                </FormControl>
                <FormButton>Зарегистрироваться</FormButton>
            </Form>
            <LoginText>Уже зарегистрированы? Выполните <Link to="/signin">вход</Link></LoginText>
        </FormWrapper>
    );

};

export default SignUp;