import phone from "../../../icons/telephone.svg"
import email from "../../../icons/envelope.svg"
import { Header, HeaderBtnLeft, HeaderBtnRight, HeaderText, HeaderTextWrapper, HeaderTitle, UserCarInfo, UserCardContact, UserCardContactWrapper, UserCardText, UserCardWrapper, UserContactIcon, UserPhoto } from "./styled";
import { useNavigate } from "react-router-dom";

const User = () => {

    const navigate = useNavigate();

    const handleUsers = () => {
        navigate("/users");
    }
    const signOut = () => {
        navigate("/signIn");
    }

    return (
        <>
            <Header>
                <HeaderBtnLeft onClick={handleUsers}>Назад</HeaderBtnLeft>
                <UserCarInfo>
                    <UserPhoto></UserPhoto>
                    <HeaderTextWrapper>
                        <HeaderTitle>Tomas Black</HeaderTitle>
                        <HeaderText>Партнер</HeaderText>
                    </HeaderTextWrapper>
                </UserCarInfo>
                <HeaderBtnRight onClick={signOut}>Выход</HeaderBtnRight>
            </Header>
            <UserCardWrapper>
                <UserCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </UserCardText>
                <UserCardContactWrapper>
                    <UserCardContact>
                        <UserContactIcon>
                            <img src={phone} alt="SVG logo" />
                        </UserContactIcon>
                        8 (800) 555-35-35
                    </UserCardContact>
                    <UserCardContact>
                        <UserContactIcon>
                            <img src={email} alt="SVG logo" />
                        </UserContactIcon>
                        example@gmail.com
                    </UserCardContact>
                </UserCardContactWrapper>
            </UserCardWrapper>
        </>
    )
}



export default User;