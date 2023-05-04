import { useNavigate } from "react-router-dom";
import heart from "../../icons/heart.svg"
import heartFill from "../../icons/heart-fill.svg"
import down from "../../icons/box-arrow-right.svg"
import { Fragment, useEffect, useState } from "react";
import fetchUsers from "../../api/fetchUsers";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import {
    DownIcon,
    Header,
    HeaderBtn,
    HeaderIcon,
    HeaderText,
    HeaderTextWrapper,
    HeaderTitle,
    InputHeartIcon,
    ShowMoreBtn,
    ShowMoreBtnWrapper,
    UserCard,
    UserCardPhoto,
    UserCardText,
    UserWrapper
} from "./styled";

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
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(removeUser());
        navigate("/signin");
    }

    return (
        <>
            <Header>
                <HeaderBtn onClick={signOut}>Выход</HeaderBtn>
                <HeaderIcon onClick={signOut}></HeaderIcon>
                <HeaderTextWrapper>
                    <HeaderTitle>Наша команда</HeaderTitle>
                    <HeaderText>Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                        которые ложатся на их плечи, и умеющие находить выход из любых,
                        даже самых сложных ситуаций. </HeaderText>
                </HeaderTextWrapper>
            </Header>
            <UserWrapper>

                {error ? (<p>Ошибка получения данных</p>
                ) : (users.map((user) => {
                    return (
                        <Fragment key={user.id}>
                            <UserCard>
                                <a href={`/users/${user.id}`}><UserCardPhoto src={user.avatar} /></a>
                                <UserCardText>{user.first_name} {user.last_name}</UserCardText>
                                <InputHeartIcon onClick={toggleHeart}>
                                    {<img src={heartShown ? heartFill : heart} alt="heart" />}
                                </InputHeartIcon>
                            </UserCard>
                        </Fragment>
                    );
                }))}

            </UserWrapper>
            <ShowMoreBtnWrapper>
                <ShowMoreBtn>Показать еще
                    <DownIcon> {<img src={down} alt="arrow" />}
                    </DownIcon>
                </ShowMoreBtn>
            </ShowMoreBtnWrapper>
        </>
    )
}

export default Users;
