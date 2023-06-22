import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button className="google-login-btn" onClick={logGoogleUser}>
        Login with Google Popup
      </button>
    </div>
  );
};

export default Login;
