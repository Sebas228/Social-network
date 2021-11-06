import {
  getAuth,
  signInWithPopup,
  googleAuthProvider,
  githubAuthProvider
} from '../firebaseConfig';

import DividerWithText from '../components/DividerWithText';
import GithubButton from '../components/GithubButton';
import GoogleButton from '../components/GoogleButton';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

  const { updateUser } = useContext(AuthContext);

  const handleLoginWithGoogle = () => {

    const auth = getAuth();

    signInWithPopup(auth, googleAuthProvider)
      .then(result => {

        if (result.user) {

          const { displayName, photoURL } = result.user;

          updateUser({
            name: displayName,
            image: photoURL
          });

        }

      })
      .catch(console.log);

  };

  const handleLoginWithGithub = () => {

    const auth = getAuth();

    signInWithPopup(auth, githubAuthProvider)
      .then(result => {

        if (result.user) {

          const { displayName, photoURL } = result.user;

          updateUser({
            name: displayName,
            image: photoURL
          });

        }

      })
      .catch(console.log);

  };

  return (
    <div className="login-screen">
      <div className="login-container">
        <h2>Dummy Social Network</h2>
        <h4>Iniciar Sesión</h4>
        <p>Selecciona uno de los proveedores para iniciar sesión</p>
        <GoogleButton onClick={handleLoginWithGoogle} />
        <DividerWithText text="O" />
        <GithubButton onClick={handleLoginWithGithub} />
      </div>
    </div>
  );
}

export default Login;
