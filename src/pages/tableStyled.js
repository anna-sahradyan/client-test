import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 9;
  padding: 15px;
  background-color: #f5f5f5;
  height: calc(100vh - 30px);


`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 35px auto;
  background-color: #fff;
  height: calc(100vh - 50px);


`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
  
`;
export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 20px;
 
`;
export const H = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  transform: translateY(-50%);
  font-size: 20px;
  line-height: 30px;
`;

export const Title = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-content: center;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 947px;
  transform: translateY(-65%);
  width: 141px;
  height: 40px;
  border: none;
  color: #fff;
  background-color: #edbc4a;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
