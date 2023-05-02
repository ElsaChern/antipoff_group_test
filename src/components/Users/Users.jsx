// import { Navigate } from "react-router-dom";
import heart from "../../icons/heart.svg"
import heartFill from "../../icons/heart-fill.svg"
import { Header, HeaderBtn, HeaderText, HeaderTextWrapper, HeaderTitle, InputHeartIcon, UserCard, UserCardPhoto, UserCardText, UserWrapper } from "./styled";
import { useState } from "react";

const Users = () => {
    const [heartShown, setHeartShown] = useState(false);

    const toggleHeart =  () => {
        setHeartShown(!heartShown)
    }
    return (
        <>
        {/* // <Navigate to="/signin" /> */}
        <Header>
            <HeaderBtn>Выход</HeaderBtn>
            <HeaderTextWrapper>
                <HeaderTitle>Наша команда</HeaderTitle>
                <HeaderText>Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                которые ложатся на их плечи, и умеющие находить выход из любых,
                даже самых сложных ситуаций. </HeaderText>
            </HeaderTextWrapper>
        </Header>
        <UserWrapper>
            <UserCard>
                <UserCardPhoto />
                <UserCardText>Tomas Black</UserCardText>
                <InputHeartIcon onClick={toggleHeart}>
                { heartShown ? <img src={heartFill} alt="SVG logo" /> : <img src={heart} alt="SVG logo" /> }
                </InputHeartIcon>
            </UserCard>
            <UserCard>
                <UserCardPhoto />
                <UserCardText>Tomas Black</UserCardText>
                <InputHeartIcon onClick={toggleHeart}>
                { heartShown ? <img src={heartFill} alt="SVG logo" /> : <img src={heart} alt="SVG logo" /> }
                </InputHeartIcon>
            </UserCard>
            <UserCard>
                <UserCardPhoto />
                <UserCardText>Tomas Black</UserCardText>
                <InputHeartIcon onClick={toggleHeart}>
                { heartShown ? <img src={heartFill} alt="SVG logo" /> : <img src={heart} alt="SVG logo" /> }
                </InputHeartIcon>
            </UserCard>
            <UserCard>
                <UserCardPhoto />
                <UserCardText>Tomas Black</UserCardText>
                <InputHeartIcon onClick={toggleHeart}>
                { heartShown ? <img src={heartFill} alt="SVG logo" /> : <img src={heart} alt="SVG logo" /> }
                </InputHeartIcon>
            </UserCard>
            <UserCard>
                <UserCardPhoto />
                <UserCardText>Tomas Black</UserCardText>
                <InputHeartIcon onClick={toggleHeart}>
                { heartShown ? <img src={heartFill} alt="SVG logo" /> : <img src={heart} alt="SVG logo" /> }
                </InputHeartIcon>
            </UserCard>
        </UserWrapper>
        </>
    )
}

export default Users;

