import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 5px;
  margin-right: 5px;
  width: 250px;
`;

export const Btn = styled.button`
  padding: 5px 10px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 3px;
  height: 100%;

  &:hover {
    opacity: 0.9;
  }
`;
