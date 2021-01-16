import React from "react";
import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
  border: ${props => props.border || '1px solid #ccc'};
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

function TextField({name, type, label, border, placeholder}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type={type} name={name} border={border} placeholder={placeholder}/>
    </Container>
  );
}

export default TextField;
