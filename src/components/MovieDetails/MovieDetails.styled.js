import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid black;
`;

export const List = styled.ul`
  list-style: none;
  padding: 20px;
  padding-top: 10px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;
  gap: 20px;
  border-left: 1px solid black;
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const BackBtn = styled.button`
  background-color: orangered;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 7px;
`;

export const UseLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  gap: 5px;

  &:hover {
    color: orangered;
  }
`;
