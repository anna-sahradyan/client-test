import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 30px);
  top: 50px;
  background: #fff;
  position: sticky;


`;


export const Wrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: calc(100vh - 30px);
  transition: all 0.5s;

`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #000;

  &:hover, &:focus {
    border-left: 5px solid #EDBC4A;
    background-color: ${props => props.color};
    cursor: pointer;

  }
`;
export const Span = styled.span`


`;
export const Main = styled.span`
  width: 100%;
  padding: 20px;

`;
export const Link = styled.a`
  text-decoration: none;

`;
export const Button = styled.button`
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;

`;

export const Hr = styled.hr`
  margin: 20px 0;

`;

export const Bottom = styled.div`

`;
export const Img = styled.img`
  width: 15px;
  margin: 5px;
`;