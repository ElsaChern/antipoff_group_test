import { useNavigate } from "react-router-dom";
import heart from "../../icons/heart.svg"
import heartFill from "../../icons/heart-fill.svg"
import down from "../../icons/box-arrow-right.svg"
import { DownIcon, Header, HeaderBtn, HeaderText, HeaderTextWrapper, HeaderTitle, InputHeartIcon, ShowMoreBtn, ShowMoreBtnWrapper, UserCard, UserCardPhoto, UserCardText, UserWrapper } from "./styled";
import { useState } from "react";
// import { useAuth } from '../../hooks/use-auth';

const Users = () => {
    const [heartShown, setHeartShown] = useState(false);

    const toggleHeart =  () => {
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
            <UserCard >
                <UserCardPhoto onClick={handleProfile}/>
                <UserCardText>Tomas Black</UserCardText>
                <InputHeartIcon onClick={toggleHeart}>
                { heartShown ? <img src={heartFill} alt="SVG logo" /> : <img src={heart} alt="SVG logo" /> }
                </InputHeartIcon>
            </UserCard>
        </UserWrapper>
        <ShowMoreBtnWrapper>
            <ShowMoreBtn>Показать еще 
                <DownIcon> {<img src={down} alt="SVG logo"/>}
                </DownIcon>
            </ShowMoreBtn>
        </ShowMoreBtnWrapper>
        </>
    ) 
}

export default Users;
