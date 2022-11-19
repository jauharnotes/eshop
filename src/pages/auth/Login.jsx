import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { FaGoogle, FaLeaf } from "react-icons/fa";
import Card from "../../components/card/Card";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// styles
import styles from "./Auth.module.sass";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login is successfuly...");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
      });
  };

  // login with google
  const provider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login is successfuly...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}

      <div className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt='logins' width='400' />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
              <input
                type='text'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit' className='--btn --btn-primary --btn-block'>
                Login
              </button>
              <div className={styles.links}>
                <Link to='/reset'>Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className='--btn --btn-danger --btn-block'
              onClick={signinWithGoogle}
            >
              <FaGoogle color='#fff' style={{ marginRight: "5px" }} /> Login
              With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to='/register'>Register</Link>
            </span>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
