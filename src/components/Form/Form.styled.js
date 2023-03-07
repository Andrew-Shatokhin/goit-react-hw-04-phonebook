import styled from 'styled-components';

export const FormCard = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  color: #000977;
`;

export const Input = styled.input`
  margin: 5px 0;
`;

export const Button = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  border-color: gray;
  background-color: #002bc0;
  font-weight: 500;
  text-transform: capitalize;
  font-style: italic;
  color: white;
  font-size: 24px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #fffb5e;
    color: blue;
    cursor: pointer;
`;
