import * as yup from 'yup';

export const initialLogin = {
    username: '',
    password: ''
}
export const initialError ={
    username: '',
    password: ''
}
export const formSchema = yup.object().shape({

    username: yup
        .string()
        .min(2, "Username must include 2 characters or more")
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required"),
})