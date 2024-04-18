import { useContext, useState } from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@org.mwashi-mwale/api_service';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const loggingState = useState(true);
  const user = useUserContext()

  return (
    <div className={styles.myContainer}>
      <div className="row">
        <img
          src="/logos/HosDocs__logo-with-text.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <div className="row">
        <div className={styles.buttons}>
          {loggingState ? (
            <>
            <h3>Logged in</h3>
            </>
          ) : (
            <>
              <button
                type="button"
                className={styles.register_btn}
                onClick={() => {
                  navigate('register');
                }}
              >
                Sign Up
              </button>
              <button
                type="button"
                className={styles.login_btn}
                onClick={() => {
                  navigate('login');
                }}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
