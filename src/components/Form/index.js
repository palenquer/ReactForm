import React, { useState } from "react";
import styled from "styled-components";
import Switch from "./Switch";
import TextField from "./TextField";

export const FormWrapper = styled.form`
  padding: 2rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 1rem;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Legend = styled.legend`
  padding-bottom: 1rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #622569;
`;
export const Button = styled.button`
  font-size: 1.6rem;
  align-self: flex-end;
  border: none;
  border-radius: 1rem;
  width: 100px;
  height: 50px;
  color: white;
  background-color: #622569;
  &:hover {
    cursor: pointer;
    background-color: #b8a9c9;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateX(3px);
  }
`;

function Form() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotion, setPromotion] = useState(false);

  function ResetForm() {
    setName("");
    setLastName("");
    setCpf("");
    setPromotion(false);
  }
  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ name, lastname, cpf, promotion });
        ResetForm();
      }}
    >
      <Fieldset>
        <Legend>React Form</Legend>
        <TextField
          htmlFor="name"
          value={name}
          name="Name"
          id="name"
          type="text"
          onChange={(event) => {
            let getName = event.target.value;
            if (getName.length >= 9) {
              getName = getName.substr(0, 12);
            }
            setName(getName);
          }}
        />
        <TextField
          htmlFor="lastname"
          value={lastname}
          name="Last Name"
          id="lastname"
          type="text"
          onChange={(event) => {
            let getLastName = event.target.value;
            if (getLastName.length >= 9) {
              getLastName = getLastName.substr(0, 12);
            }
            setLastName(getLastName);
          }}
        />
        <TextField
          htmlFor="cpf"
          value={cpf}
          name="CPF"
          id="cpf"
          type="number"
          onChange={(event) => {
            setCpf(event.target.value);
            let getCpf = event.target.value;
            if (getCpf.length >= 11) {
              getCpf = getCpf.substr(0, 11);
            }
            setCpf(getCpf);
          }}
        />
        <Switch
          htmlFor="promotion"
          name="Promotion"
          id="promotion"
          type="checkbox"
          checked={promotion}
          onChange={(event) => {
            setPromotion(event.target.checked);
          }}
        />
        <Button type="submit">Send</Button>
      </Fieldset>
    </FormWrapper>
  );
}

export default Form;