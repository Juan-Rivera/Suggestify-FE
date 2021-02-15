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
        .min(6, "Password must include 6 characters or more")
        .required("Password is required"),
})