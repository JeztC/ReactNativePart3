import {Pressable, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: "wrap",
        alignItems: 'flex-start',
        alignContent: 'flex-start'
    },
    loginPanel: {
        color: 'white',
        backgroundColor: '#0366d6',
        padding: 5,
        flexGrow: 1,
    },
})

const SigninForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry = {true} name="password" placeholder="Password" />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text style={styles.loginPanel}>Sign in</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SigninForm;