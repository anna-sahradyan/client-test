import React from 'react';
import {Container,Text, TitleLogo} from "./homeStyled";
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <>
           <Container>
              <Link to={"/auth"}><TitleLogo>Logo</TitleLogo></Link>
               <Text>Welcome To CRM System
                   Sign In To Your Account</Text>

           </Container>
        </>
    );
};

export default Home;
