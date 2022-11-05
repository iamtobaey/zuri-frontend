import * as yup from "yup";


export const Schemas = yup.object().shape({
  first_name: yup.string().text("Please enter a value").required("Required"),
  last_name: yup.string().text("Please enter a value").required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup.string().text("Please enter a value").required("Required"),
});
