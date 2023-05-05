import { Link, Navigate, useNavigate } from "react-router-dom";
import openEye from "../../../icons/open_eye.svg";
import closeEye from "../../../icons/eye-slash.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import register from "../../../api/register";
import { setUser } from "../../../store/slices/userSlice";
import validation from "./validation";
import { useAuth } from "../../../hooks/use-auth";
import {
    ErrorField,
    Form,
    FormButton,
    FormControl,
    FormInput,
    FormInputWrapper,
    FormLabel,
    FormTitle,
    FormWrapper,
    Icon,
    InputIcon,
    LoginText,
    RequestErrorField
} from "../styled";

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfirmationShown, setpasswordConfirmationShown] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
    });
    const [errors, setErrors] = useState({});
    const [requestError, setRequestError] = useState("");

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        });
    };

    const togglePasswordShown = () => {
        setPasswordShown(!passwordShown);
    };

    const togglePasswordConfirmationShown = () => {
        setpasswordConfirmationShown(!passwordConfirmationShown);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        const newErrors = validation(values);
        setErrors(newErrors);

        if (Object.keys(newErrors).length) {
            return;
        };

        try {
            const result = await register(values.email, values.password);
            dispatch(setUser({ token: result.token }));
            navigate("/users");
        } catch (err) {
            setRequestError(err);
        };
    };

    const { isAuth } = useAuth();

    return isAuth ? (
        (<Navigate to="/users" />)
    ) : (
        <FormWrapper>
            <RequestErrorField>{requestError}</RequestErrorField>
            <Form onSubmit={handleSubmit} noValidate>
                <FormTitle>Регистрация</FormTitle>
                <FormControl>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormInputWrapper>
                        <FormInput
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="example@mail.ru"
                            style={errors.email && { borderColor: "red" }}
                        />
                        <ErrorField>{errors.email}</ErrorField>
                    </FormInputWrapper>
                    <FormLabel>Пароль</FormLabel>
                    <FormInputWrapper>
                        <FormInput
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="******"
                            style={errors.password && { borderColor: "red" }}
                        />
                        <InputIcon onClick={togglePasswordShown}>
                            {<Icon src={passwordShown ? openEye : closeEye} alt="eye" />}
                        </InputIcon>
                        <ErrorField>{errors.password}</ErrorField>
                    </FormInputWrapper>
                    <FormLabel>Подтвердите пароль</FormLabel>
                    <FormInputWrapper>
                        <FormInput
                            type={passwordConfirmationShown ? "text" : "password"}
                            name="passwordConfirmation"
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                            placeholder="******"
                            style={errors.passwordConfirmation && { borderColor: "red" }}
                        />
                        <InputIcon onClick={togglePasswordConfirmationShown}>
                            {<Icon src={passwordConfirmationShown ? openEye : closeEye} alt="eye" />}
                        </InputIcon>
                        <ErrorField>{errors.passwordConfirmation}</ErrorField>
                    </FormInputWrapper>
                </FormControl>
                <FormButton type="submit">Зарегистрироваться</FormButton>
            </Form>
            <LoginText>Уже зарегистрированы? Выполните <Link to="/signin">вход</Link></LoginText>
        </FormWrapper>
    );

};

export default SignUp;