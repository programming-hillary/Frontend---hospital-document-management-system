import styles from './homepage.module.css';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarChart,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
  faTasks,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faDochub,
  faFacebook,
  faGit,
  faGoogle,
  faGoogleDrive,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

/* eslint-disable-next-line */
export interface HomepageProps {}

export function Homepage(props: HomepageProps) {
  return (
    <div className={styles.container}>
      <div className="container">
        <nav>
          <div className="navbar">
            <div className="logo">
              <img src="/logos/HosDocs__logo-with-text.png" alt="" />
            </div>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <span className="nav-item">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faBarChart} className="icon" />
                  <span className="nav-item">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTasks} className="icon" />
                  <span className="nav-item">Jobs Board</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faDochub} className="icon" />
                  <span className="nav-item">Documnents</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCog} className="icon" />
                  <span className="nav-item">Setting</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
                  <span className="nav-item">Help</span>
                </a>
              </li>
              <li>
                <a href="#" className="logout">
                  <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                  <span className="nav-item">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section className="main">
          <div className="main-top">
            <p>Take care of what matters!</p>
          </div>
          <div className="main-body">
            <h1>Recent Jobs</h1>

            <div className="search_bar">
              <input type="search" placeholder="Search job here..." />
              <select name="" id="">
                <option>Category</option>
                <option>Web Design</option>
                <option>App Design</option>
                <option>App Development</option>
              </select>
              <select className="filter">
                <option>Filter</option>
              </select>
            </div>

            <div className="row">
              <p>
                There are more than <span>400</span> Documents
              </p>
              <a href="#">See all</a>
            </div>

            <div className="job_card">
              <div className="job_details">
                <div className="img">
                  <FontAwesomeIcon icon={faGoogleDrive} className="icon" />
                </div>
                <div className="text">
                  <h2>UX Designer</h2>
                  <span>Google Drive - Junior Post</span>
                </div>
              </div>
              <div className="job_salary">
                <h4>$6.7 - $12.5k /yr</h4>
                <span>1 days ago</span>
              </div>
            </div>

            <div className="job_card">
              <div className="job_details">
                <div className="img">
                  <FontAwesomeIcon icon={faGoogle} className="icon" />
                </div>
                <div className="text">
                  <h2>JavaScript Developer</h2>
                  <span>Google - Senior Post</span>
                </div>
              </div>
              <div className="job_salary">
                <h4>$8.7 - $13.2k /yr</h4>
                <span>2 days ago</span>
              </div>
            </div>

            <div className="job_card">
              <div className="job_details">
                <div className="img">
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                </div>
                <div className="text">
                  <h2>Product Developer</h2>
                  <span>Facbook - Manager Post</span>
                </div>
              </div>
              <div className="job_salary">
                <h4>$11 - $18.5k /yr</h4>
                <span>2 days ago</span>
              </div>
            </div>

            <div className="job_card">
              <div className="job_details">
                <div className="img">
                  <FontAwesomeIcon icon={faGit} className="icon" />
                </div>
                <div className="text">
                  <h2>Programmer</h2>
                  <span>Github - Juni Post</span>
                </div>
              </div>
              <div className="job_salary">
                <h4>$6 - $11.5k /yr</h4>
                <span>3 days ago</span>
              </div>
            </div>

            <div className="job_card">
              <div className="job_details">
                <div className="img">
                  <FontAwesomeIcon icon={faYoutube} className="icon" />
                </div>
                <div className="text">
                  <h2>React.js Expert</h2>
                  <span>Youtube - VIP</span>
                </div>
              </div>
              <div className="job_salary">
                <h4>$12.5 - $25.5k /yr</h4>
                <span>4 days ago</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
