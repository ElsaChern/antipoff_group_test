import { Link, useNavigate } from "react-router-dom";
import { Form, FormButton, FormControl, FormInput, FormLabel, FormTitle, FormWrapper, InputIcon, LoginText } from "./styled";
import openEye from "../../icons/open_eye.svg"
import closeEye from "../../icons/eye-slash.svg"
import { useState } from "react";
import { useDispatch } from "react-redux";
import register from "../../api/register";
import { setUser } from "../../store/slices/userSlice";

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordVerificationShown, setpasswordVerificationShown] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerification, setpasswordVerification] = useState("");

    const togglePasswordShown = () => {
        setPasswordShown(!passwordShown);
    }

    const togglePasswordVerificationShown = () => {
        setpasswordVerificationShown(!passwordVerificationShown);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await register(email, password);
        dispatch(setUser({token: result.token}))
        navigate("/users")
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <FormTitle>Регистрация</FormTitle>
                <FormControl>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormInput
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.ru"
                    />
                    <FormLabel>Пароль</FormLabel>
                    <FormInput
                        type={passwordShown ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******"
                    />
                    <InputIcon onClick={togglePasswordShown}>
                        {passwordShown ? <img src={openEye} alt="SVG logo" /> : <img src={closeEye} alt="SVG logo" />}
                    </InputIcon>
                    <FormLabel>Подтвердите пароль</FormLabel>
                    <FormInput
                        type={passwordVerificationShown ? "text" : "password"}
                        value={passwordVerification}
                        onChange={(e) => setpasswordVerification(e.target.value)}
                        placeholder="******"
                    />
                    <InputIcon onClick={togglePasswordVerificationShown}>
                        {passwordVerificationShown ? <img src={openEye} alt="SVG logo" /> : <img src={closeEye} alt="SVG logo" />}
                    </InputIcon>
                </FormControl>
                <FormButton type="submit">Зарегистрироваться</FormButton>
            </Form>
            <LoginText>Уже зарегистрированы? Выполните <Link to="/signin">вход</Link></LoginText>
        </FormWrapper>
    );

};

export default SignUp;