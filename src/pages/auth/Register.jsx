import React from 'react';
import styles from './../auth/Auth.module.sass';
import registerImg from '../../assets/register.png';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={registerImg} alt='logins' width='400' />
      </div>

      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form>
            <input type='text' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <input type='password' placeholder='Confirm Password' required />
            <button className='--btn --btn-primary --btn-block'>
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
  );
}

export default Register;
