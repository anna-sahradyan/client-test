import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.4),
  rgba(255, 255, 255, 0.4)), url(/img/social.jpg);
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

`;
export const TitleLogo = styled.h1`
  position: absolute;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: -2px;
  color: teal;
  left: 50%;
  top: 20%;
  z-index: 2;

`;
export const Text = styled.h1`
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  width: 40%;
  left: 40%;
  top: 35%;
`