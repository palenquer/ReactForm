import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is a required field"),
  lastname: Yup.string().min(2, "LastName must be at least 2 characters").required("LastName is a required field"),
  cpf: Yup.string().length(11, "This field has to be exactly 11 characters").required("CPF is a required field"),
});
