import React from "react";
import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field) `
  margin-right: 0.5rem;
  border-radius: 1rem;
  padding: 1rem;
`;
export const Label = styled.label `
  padding-top: 1.2rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
export const Container = styled.p `
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

function Switch({type, name}) {
  return (
    <Container>
      <Input name={name} type={type}/>
      <Label>Sales</Label>
    </Container>
  );
}

export default Switch;