import { useNavigate } from "react-router-dom";
import heart from "../../icons/heart.svg"
import heartFill from "../../icons/heart-fill.svg"
import down from "../../icons/box-arrow-right.svg"
import { DownIcon, Header, HeaderBtn, HeaderText, HeaderTextWrapper, HeaderTitle, InputHeartIcon, ShowMoreBtn, ShowMoreBtnWrapper, UserCard, UserCardPhoto, UserCardText, UserWrapper } from "./styled";
import { useEffect, useState } from "react";
import fetchUsers from "../../api/fetchUsers";
// import { useAuth } from '../../hooks/use-auth';

const Users = () => {
    const [heartShown, setHeartShown] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    const getUsers = async () => {
        try {
            const usersResult = await fetchUsers();
            setUsers(usersResult)
        } catch (err) {
            setError(true);
            setUsers([]);
        }
    }

    useEffect(() => {
        getUsers({});
    }, []);


    const toggleHeart = () => {
        setHeartShown(!heartShown)
    }

    const navigate = useNavigate();

    const handleProfile = () => {
        navigate("/user");
    }

    const signOut = () => {
        navigate("/signIn");
    }

    return (
        <>
            <Header>
                <HeaderBtn onClick={signOut}>Выход</HeaderBtn>
                <HeaderTextWrapper>
                    <HeaderTitle>Наша команда</HeaderTitle>
                    <HeaderText>Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                        которые ложатся на их плечи, и умеющие находить выход из любых,
                        даже самых сложных ситуаций. </HeaderText>
                </HeaderTextWrapper>
            </Header>
            <UserWrapper>

                {error ? (<div>Ошибка получения данных</div>
                ) : (users.map((user) => {
                    return (
                        <>
                            <UserCard>
                                <UserCardPhoto onClick={handleProfile} key={user.avatar} src={user.avatar} />
                                <UserCardText>{user.first_name} {user.last_name}</UserCardText>
                                <InputHeartIcon onClick={toggleHeart}>
                                    {<img src={heartShown ? heartFill : heart} alt="logo"/>}
                                </InputHeartIcon>
                            </UserCard>
                        </>
                    );
                }))}

            </UserWrapper>
            <ShowMoreBtnWrapper>
                <ShowMoreBtn>Показать еще
                    <DownIcon> {<img src={down} alt="logo" />}
                    </DownIcon>
                </ShowMoreBtn>
            </ShowMoreBtnWrapper>
        </>
    )
}

export default Users;
