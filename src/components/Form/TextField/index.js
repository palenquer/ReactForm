import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
    border-left: 2px solid #622569;
  }
`;
export const Label = styled.label`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
export const Container = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

function TextField({ id, name, type, htmlFor, onChange, value }) {
  return (
    <Container>
      <Label htmlFor={htmlFor}>{name}</Label>
      <Input id={id} type={type} onChange={onChange} value={value} />
    </Container>
  );
}

export default TextField;
