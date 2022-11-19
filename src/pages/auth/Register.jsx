import React, { useEffect, useState } from "react";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';

// styles
import "react-toastify/dist/ReactToastify.css";
import styles from "./../auth/Auth.module.sass";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const reginsterUser = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error("Password do not match.");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setIsLoading(false);
      toast.success("Registration successfuly...");
      navigate("/login");
    })
    .catch((error) => {
      toast.error(error.message);
      setIsLoading(false);
    });
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <div className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={registerImg} alt='logins' width='400' />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={reginsterUser}>
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
              <input
                type='password'
                placeholder='Confirm Password'
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button type='submit' className='--btn --btn-primary --btn-block'>
                Register
              </button>
            </form>

            <span className={styles.register}>
              <p>Already an account?</p>
              <Link to='/login'>Login</Link>
            </span>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Register;
