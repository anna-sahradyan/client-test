import styled from "styled-components";


export const STable = styled.table`
  border-spacing: 5px;
  border-collapse: collapse;
  width: 100%;
  font-weight: bold;
  color: #333;
`;
export const Input = styled.input`

`;
export const STR = styled.tr`
  width: 100%;
  height: 78px;
  border-bottom: 1px solid black;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
  
`;
export const STH = styled.th`
  height: 78px;
  padding: 8px;
  text-transform: capitalize;

  &:after {
    content: "";
    top: 20%;
    left: 0;
    height: 80%;
    margin-top: 40%;
    border-right: 1px solid black;
  }

  &:last-child:after {
    display: none;
  }

  &:first-child {
    width: 50px;
    border: none;

    &:after {
      border-right: none;
    }
  }
`;

export const STD = styled.td`
  height: 78px;
  padding: 8px;
  margin: 5px;
  border-bottom: 1px solid black;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
`;

export const Span = styled.span`
    cursor: pointer;

`;
export const TdInput = styled.td`
  width: 30px;
  padding: 4px;
`;

export const ThInput = styled.th`

`;
export const STbody = styled.tbody`
  //padding:4px ;
`;
export const SThead = styled.thead`
  position: sticky;
  z-index: 100;
`;





