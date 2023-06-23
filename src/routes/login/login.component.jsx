import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Button
        buttonType="google-sign-in"
        className="google-login-btn"
        onClick={logGoogleUser}
      >
        Login with Google Popup
      </Button>
      <SignUpForm />
    </div>
  );
};

export default Login;
