import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
        await createUserDocumentFromAuth(response.user)
    }
    return (
        <div>
            <h1>This is the SignIn</h1>
            <button onClick={logGoogleUser}>SIGN IN</button>
        </div>
        
    );
};

export default SignIn;