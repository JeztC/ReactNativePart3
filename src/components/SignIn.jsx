import { Formik} from 'formik';
import SigninForm from "./SigninForm";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
import useAuthStorage from "../hooks/useAuthStorage";
import {useNavigate} from "react-router-native";

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(2, 'Username must be greater or equal to 2 in length.')
        .required('Username is required'),
    password: yup
        .string()
            .min(2, 'Password must be greater or equal to 2 in length.')
            .required('Password is required'),
});

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signIn({ username, password });
            navigate('/')
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) =>
                <SigninForm onSubmit={handleSubmit}
                />}
        </Formik>
    )
};
export default SignIn;