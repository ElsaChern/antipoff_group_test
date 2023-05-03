import styled from "styled-components";

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
    margin-bottom: 64px;
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
    justify-content: center;
`;

const UserCard = styled.div`
    
    width: 305px;
    height: 265px;    
    margin-right: 20px;
    margin-bottom: 20px; 
    align-items: center;
    box-shadow: 0px 0.996045px 3.98418px rgba(51, 51, 51, 0.15);
    border-radius: 10px;
`;

const UserCardPhoto = styled.img`
    width: 124px;
    height: 124px;
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

const ShowMoreBtnWrapper = styled.div`
    display: flex;  
    justify-content: center;
    margin-bottom: 70px;
`;

const ShowMoreBtn = styled.button`
    width: 170px;
    background: #FFFFFF;
    color: rgba(21, 19, 23, 1)
    border: 1px solid #F8F8F8;
    padding: 8px 16px;
    border: 1px solid #151317;
    border-radius: 8px;
    font-size: 16px;   
`;

const DownIcon = styled.span`
    margin: 6px;
`;

export { Header, HeaderTextWrapper, HeaderTitle, HeaderText, HeaderBtn, UserWrapper, UserCard, UserCardPhoto, UserCardText, InputHeartIcon, ShowMoreBtn, ShowMoreBtnWrapper, DownIcon };
