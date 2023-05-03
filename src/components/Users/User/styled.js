import styled from "styled-components";
import img from "../../../icons/cat.jpeg"

const Header = styled.div`
    background-color: rgba(81, 38, 137, 1);
    color: rgba(248, 248, 248, 1);
`;

const HeaderBtnLeft = styled.button`
    position: absolute;
    top: 40px;
    left: 120px;
    background-color: rgba(81, 38, 137, 1);
    color: rgba(248, 248, 248, 1);
    border: 1px solid #F8F8F8;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 16px;    
`;

const HeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserCarInfo = styled.div`
    display: flex;   
    justify-content: flex-start;
    align-items: stretch;
    margin-left: 200px;
`;

const UserPhoto = styled.div`
    margin: 39px;
    width: 185px;
    height: 185px;
    background-image: url('${img}');
    background-size: cover;
    border-radius: 100px;
`;

const HeaderTitle = styled.p`
    margin-bottom: 16px;
    font-size: 64px;
    line-height: 75px;
`;

const HeaderText = styled.p`
    font-size: 20px;
    line-height: 23px;
`;

const HeaderBtnRight = styled.button`
    position: absolute;
    top: 40px;
    right: 120px;
    background-color: rgba(81, 38, 137, 1);
    color: rgba(248, 248, 248, 1);
    border: 1px solid #F8F8F8;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 16px;    
`;

const UserCardWrapper = styled.div`
    margin: 49px 80px;
    display: flex;    
    justify-content: space-around;
`;

const UserCardText = styled.p`
    font-size: 16px;
    max-width: 630px;
    line-height: 25px;
`;

const UserCardContactWrapper = styled.div`
    width: 200px;
    font-size: 16px;
`;

const UserCardContact = styled.p`
    margin-bottom: 25px;
`;

const UserContactIcon = styled.span`
    padding-right: 10px;
`;


export {
    Header, HeaderBtnLeft, UserCarInfo, UserPhoto, HeaderTextWrapper,
    HeaderTitle, HeaderText, HeaderBtnRight, UserCardWrapper, UserCardText,
    UserCardContactWrapper, UserCardContact, UserContactIcon
};
