import React from 'react';
import {HeaderBlock, Input, Logo, Wrapper, Avatar, Img, InputDiv, ImgAvatar, P, SubP} from "./headerStyled";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to={"/"}><Logo>Logo</Logo></Link>
                    <InputDiv>
                    <Img src={"/img/search.svg"}/><Input  type="text" placeholder="Search" />
                    </InputDiv>
                    <Avatar><ImgAvatar src={"/img/avatar.svg"}/>
                    <P> Mr.Director </P>
                        <SubP>Managing Director</SubP>
                    </Avatar>
                </Wrapper>
            </HeaderBlock>
        </>
    );
};

export default Header;