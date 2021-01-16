import React from "react";
import styled from "styled-components";
import { Formik, Form, ErrorMessage } from "formik";
import Switch from "./Switch";
import TextField from "./TextField";
import schema from "./schema";
const axios = require("axios");

export const Page = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormWrapper = styled(Form)`
  margin: 2rem;
  padding: 2rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
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
export const Error = styled(ErrorMessage)`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: red;
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
  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

function Forms() {
  function onSubmit(values, actions) {
    console.log("submit", values);
    axios
      .post("http://localhost:3333/users", {
        name: values.name,
        lastname: values.lastname,
        cpf: values.cpf,
        sales: values.sales,
      })
      .then(function (response) {
        console.log(response);
        actions.resetForm();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      ValidateOnForm
      initialValues={{
        name: "",
        lastname: "",
        cpf: "",
        sales: false,
      }}
    >
      {({ values, errors, touched, isValid, isSubmitting }) => (
        <FormWrapper>
          <Fieldset>
            <Legend>React Form</Legend>
            <TextField
              name="name"
              type="text"
              label="Name"
              border={errors.name && "1px solid red"}
              placeholder="Your name..."
            />
            <Error component="p" name="name" />
            <TextField
              name="lastname"
              type="text"
              label="LastName"
              border={errors.lastname && "1px solid red"}
              placeholder="Your lastname..."
            />
            <Error component="p" name="lastname" />
            <TextField
              name="cpf"
              type="number"
              label="CPF"
              border={errors.cpf && "1px solid red"}
              placeholder="00000000000"
            />
            <Error component="p" name="cpf" />
            <Switch name="sales" type="checkbox" />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </Fieldset>
        </FormWrapper>
      )}
    </Formik>
  );
}

export default Forms;
