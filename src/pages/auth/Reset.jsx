import React, { useState } from "react";
import styles from "./Auth.module.sass";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import Loader from '../../components/loader/Loader';
import "react-toastify/dist/ReactToastify.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reset = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a get link to reset password");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
        // ..
      });
  };
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}

      <div className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={resetImg} alt='forgot' width='400' />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>
            <form onSubmit={reset}>
              <input
                type='text'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type='submit' className='--btn --btn-primary --btn-block'>
                Reset Password
              </button>
              <div className={styles.links}>
                <p>
                  <Link to='/login'>- Login</Link>
                </p>
                <p>
                  <Link to='/register'>- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Reset;
