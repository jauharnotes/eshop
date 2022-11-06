import React from 'react';
import styles from './Auth.module.sass';
import loginImg from '../../assets/login.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

function Login() {
  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt='logins' width='400' />
      </div>

      <div className={styles.form}>
        <h2>Login</h2>
        <form>
          <input type='text' placeholder='Email' required />
          <input type='password' placeholder='Password' required />
          <button className='--btn --btn-primary --btn-block'>Login</button>
          <div className={styles.links}>
            <Link to='/reset'>Reset Password</Link>
          </div>
          <p>-- or --</p>
        </form>
        <button className='--btn --btn-danger --btn-block'>
          <FaGoogle color='#fff' style={{ marginRight: '5px' }} /> Login With
          Google
        </button>
        <span className={styles.register}>
          <p>Don't have an account?</p>
          <Link to='/register'>Register</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
