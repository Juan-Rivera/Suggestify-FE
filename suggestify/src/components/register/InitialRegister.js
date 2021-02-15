import * as yup from 'yup';

export const initialRegister = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirmPassword: ''
}
export const initialError ={
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirmPassword: ''
}
export const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .required("First name is required"),
    last_name: yup
        .string()
        .required("Last name is required"),
    username: yup
        .string()
        .min(2, "Username must include 2 characters or more")
        .required("Username is required"),
    password: yup
        .string()
        .min(6, "Password must include 6 characters or more")
        .required("Password is required"),
    // for some reason confirmPassword not working, will revisit this later //
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})