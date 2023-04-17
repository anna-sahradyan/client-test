import React, {useState} from 'react';
import {Button, Container, Form, InputDiv, Text, Title, TitleLogo, TitleSocial, Wrapper} from "./authStyled";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Input from "./Input";
import {Grid} from "@material-ui/core";
import {signin, signup} from "../../actions/auth";
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleShowPassword = () => setShowPassword(!showPassword);
    //?submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isSignup) {
                await dispatch(signup(formData, navigate));
            } else {
                await dispatch(signin(formData, navigate));
            }

        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    };





    //?handleChange
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});


    }
    //?switchMode
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }

    return (
        <>

            <Container>
                <TitleLogo>Logo</TitleLogo>
                <Text>Welcome To CRM System
                    Sign In To Your Account</Text>
                <Wrapper>
                    <Title>
                        {isSignup ? "Sign Up" : "Sign In "}
                    </Title>
                    <Form onSubmit={handleSubmit}>
                        <InputDiv>
                            <Grid container spacing={3}>
                                {isSignup && (
                                    <>
                                        <Input
                                            name={"firstName"}
                                            label={"First Name"}
                                            handleChange={handleChange}
                                            half
                                        />
                                        <Input
                                            name={"lastName"}
                                            label={"Last Name"}
                                            handleChange={handleChange}
                                            half
                                        />
                                    </>
                                )}
                                <Input name={"email"} label={"Email "} handleChange={handleChange} type={"email"}/>
                                <Input name={"password"} label={"Password"} handleChange={handleChange}
                                       type={showPassword ? "text" : "password"}
                                       handleShowPassword={handleShowPassword}/>
                                {isSignup &&
                                    <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}
                                           type="password"/>}
                            </Grid>

                            <Button type={"submit"} fullWidth variant={"contained"} color={"primary"}  className={" "} id="my-button">
                                {isSignup ? "Sign Up" : "Sign In"}
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Button onClick={switchMode} className={" "}>
                                        {isSignup ? "Already have an account ? Sign In " : "Don't have an account ? Sign Up"}
                                    </Button>
                                </Grid>

                            </Grid>
                        </InputDiv>
                    </Form>


                </Wrapper>
            </Container>
        </>
    );
};

export default Auth;