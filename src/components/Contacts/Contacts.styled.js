import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  margin: 0 10px 0 0;

  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  text-align: center;
  color: #000977;
`;

export const Button = styled.button`
  margin: 0;
  border-radius: 5px;
  border-color: gray;
  background-color: #002bc0;
  font-weight: 500;
  text-transform: capitalize;
  font-style: italic;
  color: white;
  font-size: 16px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #fffb5e;
    color: blue;
    cursor: pointer;
`;
