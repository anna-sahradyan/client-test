import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.4),
  rgba(255, 255, 255, 0.4)), url(/img/social2.jpg);
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
 
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

`;
export const  InputDiv = styled.div`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;

`;


export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 15px;
`;
export const TitleLogo = styled.h1`
  position: absolute;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: -2px;
  color: teal;
  left: 25%;
  top: 10%;
  z-index: 2;

`;
export const Text = styled.h1`
  position: absolute;
  width: 25%;
  left: 20%;
  top: 25%;
`;