import phone from "../../../icons/telephone.svg"
import email from "../../../icons/envelope.svg"
import { Header, HeaderBtnLeft, HeaderBtnRight, HeaderText, HeaderTextWrapper, HeaderTitle, UserCarInfo, UserCardContact, UserCardContactWrapper, UserCardText, UserCardWrapper, UserContactIcon, UserPhoto } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import fetchSingleUser from "../../../api/fetchSingleUser";
import { useEffect, useState } from "react";

const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const signOut = () => {
        navigate("/signIn");
    }

    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            try {
                const userResult = await fetchSingleUser(id);
                setUser(userResult)
            } catch {
                setUser({});
            }
        }
        getUser({});
    }, [id]);

    return (
        <>
            <Header>
                <HeaderBtnLeft onClick={() => navigate(-1)}>Назад</HeaderBtnLeft>
                <UserCarInfo>
                    <UserPhoto src={user.avatar} />
                    <HeaderTextWrapper>
                        <HeaderTitle>{user.first_name} {user.last_name}</HeaderTitle>
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
                            <img src={phone} alt="phone" />
                        </UserContactIcon>
                        8 (800) 555-35-35
                    </UserCardContact>
                    <UserCardContact>
                        <UserContactIcon>
                            <img src={email} alt="envelope" />
                        </UserContactIcon>
                        {user.email}
                    </UserCardContact>
                </UserCardContactWrapper>
            </UserCardWrapper>
        </>
    )
}


export default User;