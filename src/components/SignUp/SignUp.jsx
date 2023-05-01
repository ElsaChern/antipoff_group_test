import { Link, useNavigate } from "react-router-dom";
import { Form, FormButton, FormControl, FormInput, FormLabel, FormTitle, FormWrapper, InputIcon, LoginText } from "./styled";
import openEye from "../../icons/open_eye.svg"
import closeEye from "../../icons/eye-slash.svg"
import { useState } from "react";
import { useDispatch } from "react-redux";
import register from "../../api/register";
import { setUser } from "../../store/slices/userSlice";
import validation from "./validation";

const SignUp = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfirmationShown, setpasswordConfirmationShown] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const togglePasswordShown = () => {
        setPasswordShown(!passwordShown);
    }

    const togglePasswordConfirmationShown = () => {
        setpasswordConfirmationShown(!passwordConfirmationShown);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors(validation(values));
        console.log(Object.keys(errors).length);
        if (Object.keys(errors).length !== 0) {
            console.log("here we skip");
            return;
        }
        const result = await register(values.email, values.password);
        dispatch(setUser({token: result.token}));
        navigate("/users");
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit} noValidate>
                <FormTitle>Регистрация</FormTitle>
                <FormControl>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormInput
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="example@mail.ru"
                        style={errors.email && {borderColor: "red"}} 
                    />
                    {errors.email && <p style={{color: "red" , fontSize: "10px", margin: "0"}}>{errors.email}</p>}
                    <FormLabel>Пароль</FormLabel>
                    <FormInput
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="******"
                        style={errors.password && {borderColor: "red"}} 
                    />
                    <InputIcon onClick={togglePasswordShown}>
                        {passwordShown ? <img src={openEye} alt="SVG logo" /> : <img src={closeEye} alt="SVG logo" />}
                    </InputIcon>
                    {errors.password && <p style={{color: "red" , fontSize: "10px", margin: "0"}}>{errors.password}</p>}
                    <FormLabel>Подтвердите пароль</FormLabel>
                    <FormInput
                        type={passwordConfirmationShown ? "text" : "password"}
                        name="passwordConfirmation"
                        value={values.passwordConfirmation}
                        onChange={handleChange}
                        placeholder="******"    
                        style={errors.passwordConfirmation && {borderColor: "red"}}                    
                    />
                    <InputIcon onClick={togglePasswordConfirmationShown}>
                        {passwordConfirmationShown ? <img src={openEye} alt="SVG logo" /> : <img src={closeEye} alt="SVG logo" />}
                    </InputIcon>
                    {errors.passwordConfirmation && <p style={{color: "red" , fontSize: "10px", margin: "0"}}>{errors.passwordConfirmation}</p>}
                </FormControl>
                <FormButton type="submit">Зарегистрироваться</FormButton>
            </Form>
            <LoginText>Уже зарегистрированы? Выполните <Link to="/signin">вход</Link></LoginText>
        </FormWrapper>
    );

};

export default SignUp;