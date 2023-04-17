import styled from "styled-components";

export const HeaderBlock = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex: 1;
  padding: 0 20px;

`;
export const Logo = styled.h1`
  text-transform: uppercase;
  position: absolute;
  font-size: 64px;
  display: flex;
  Line-height: 77.45px;
  margin-bottom: 0;

`;

export const InputDiv = styled.div`
  width: 470px;
  padding: 10px;
  margin-left: 180px;
`;
export const Input = styled.input`
 width: 100%;
  height: 50px;
  border: none;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  &::placeholder {
    position: absolute;
    left: 50px;
    top: 15px;
  }


`;
export const Img = styled.img`
  width: 15px;
  position: absolute;
  left: 225px;
  top: 28px;
`;
export const ImgAvatar = styled.img`
  width: 50px;
  height: 60px;
  position: absolute;
  left: 5px;
  top: -7px;
  
`;

export const Avatar = styled.div`
  position: absolute;
  width: 245px;
  left: 1080px;
  padding:  25px;
  top: 13px;



`;

export const P = styled.p`
  position: absolute;
  width: 165px;
  height: 33px;
  top: -5px;
  left: 60px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
    
`;
export const SubP = styled.p`
  position: absolute;
  width: 165px;
  height: 33px;
  top: 25px;
  left: 60px;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
  opacity: 0.7;
    
`;


