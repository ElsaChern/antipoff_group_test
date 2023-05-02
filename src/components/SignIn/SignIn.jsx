import { Link, useNavigate } from "react-router-dom";
import { Form, FormButton, FormControl, FormInput, FormLabel, FormTitle, FormWrapper, LoginText } from "./styled";
import { InputIcon } from "./styled";
import openEye from "../../icons/open_eye.svg"
import closeEye from "../../icons/eye-slash.svg"
import { useState } from "react";
import { useDispatch } from "react-redux";
import login from '../../api/login';
import { setUser } from "../../store/slices/userSlice";
import validation from "./validation";

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const togglePasswordInput = () => {
        setPasswordShown(!passwordShown);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const newErrors = validation(values)
        setErrors(newErrors);

        if (Object.keys(newErrors).length !== 0) {
            return;
        }
        
        const result = await login(values.email, values.password);
        dispatch(setUser({token: result.token}));
        navigate("/users");
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit} noValidate>
                <FormTitle>Вход</FormTitle>
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
                        type={passwordShown ? "text" : "password" }
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="******"
                        style={errors.password && {borderColor: "red"}} 
                    />
                    {errors.password && <p style={{color: "red" , fontSize: "10px", margin: "0"}}>{errors.password}</p>}
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