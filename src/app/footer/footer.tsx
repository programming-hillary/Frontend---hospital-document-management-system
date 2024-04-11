import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer>
      <div className={styles.footeContainer}>
        <div className={styles.socialIcons}>
          <a href="">
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </a>
          <a href="">
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </a>
        </div>
        <div className={styles.footerNav}>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">The Developer</a>
            </li>
          </ul>
        </div>
        <div className={styles.copyrights}>
          <p>
            &copy;2024. Designed by{' '}
            <span className={styles.myName}>Hillary Mwashi Mwale</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
