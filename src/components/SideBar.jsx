import React, {useEffect, useState} from 'react';
import {Bottom, Button, Container, Hr, Img, Li, List, Span, Wrapper, Link, Main} from "./sidebarStyled"
import {useNavigate,useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LOGOUT} from "../constants/actionTypes";
import decode from "jwt-decode";
const SideBar = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const logoutHandler = () => {
        dispatch({type:LOGOUT});
        navigate(`/`);
        setUser(null);

    }
    const loginHandler = () => {
      navigate("/auth")
    }
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler ();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    const menuItem = [
        {
        path:"/total",
        name:"Total Contacts",
        img:"/img/total.svg"

    },
        {
            path:"/calendar",
            name:"Calendar",
            img:"/img/calendar.svg"
        },
        {
            path:"/report",
            name:"Project Report",
            img:"/img/report.svg"
        }
    ]
    return (
        <>
            <Container>
                <Wrapper>
                    <List>
                        {menuItem.map((item,index)=>(
                           <Link href={item.path} key={`${item}_${index}`}> <Li color={'#FBF2DB'}>
                            <Img src={item.img} alt={"total"}/>
                            <Span>{item.name}</Span>
                        </Li></Link>
                        ))}
                    </List>
                    <Bottom>
                        <Hr/>
                        {user?( <Button onClick={logoutHandler}><Img src={"/img/log.svg"} alt={"log"}/>Log Out </Button>):(<Button onClick={loginHandler}><Img src={"/img/login.png"} alt={"log"}/>Log In </Button>)}

                    </Bottom>
                </Wrapper>
                <Main>{children}</Main>
            </Container>


        </>
    );
};

export default SideBar;
