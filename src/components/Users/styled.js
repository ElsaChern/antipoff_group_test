import styled from "styled-components";
import img from "../../icons/cat.jpeg"

const Header = styled.div`
    background-color: rgba(81, 38, 137, 1);
    color: rgba(248, 248, 248, 1);
`;

const HeaderTextWrapper = styled.div`
    padding: 5px 295px;
    text-align: center;
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

const HeaderBtn = styled.button`
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

const UserWrapper = styled.div`
    padding: 48px 80px;
    display: flex;   
    flex-wrap: wrap;  
`;

const UserCard = styled.div`
    width: 305px;
    height: 265px;    
    margin-right: 20px;
    &:nth-child(4n) {
        margin-right: 0px; 
    }
    margin-bottom: 20px; 
    align-items: center;
    box-shadow: 0px 0.996045px 3.98418px rgba(51, 51, 51, 0.15);
    border-radius: 10px;
`;

const UserCardPhoto = styled.div`
    width: 124px;
    height: 124px;
    background-image: url('${img}');
    background-size: cover;
    border-radius: 100px;
    margin: 36px 90px 16px;
`;

const UserCardText = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
`;

const InputHeartIcon = styled.span`
    border-radius: 4px;
    background: #F8F8F8;
    padding: 5px 8px 2px;
    position: relative;
    left: 245px;
    top: 20px;
`;


export { Header, HeaderTextWrapper, HeaderTitle, HeaderText, HeaderBtn, UserWrapper, UserCard, UserCardPhoto, UserCardText, InputHeartIcon };
