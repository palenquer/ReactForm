import React from "react";
import styled from "styled-components";

export const Input = styled.input `
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

function Switch({id, type, onChange, checked, defaultChecked, htmlFor, name}) {
  return (
    <Container>
      <Input id={id} type={type} onChange={onChange} checked={checked} defaultChecked={defaultChecked}/>
      <Label htmlFor={htmlFor}>{name}</Label>
    </Container>
  );
}

export default Switch;