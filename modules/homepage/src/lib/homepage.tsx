import styles from './homepage.module.css';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarChart,
  faCog,
  faPeopleGroup,
  faQuestionCircle,
  faSearch,
  faSignOutAlt,
  faTasks,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import {
  DocumentsApiService,
  useDocumentContext,
} from '@org.mwashi-mwale/documents_api_service';
import {
  SearchApiService,
  useSearchContext,
} from '@org.mwashi-mwale/search_api_service';
import {
  VersionsApiService,
  useVersionsContext,
} from '@org.mwashi-mwale/versions_api_service';

/* eslint-disable-next-line */
export interface HomepageProps {}

export function Homepage(props: HomepageProps) {
  const documents = useDocumentContext();
  const searches = useSearchContext();
  const versions = useVersionsContext();
  return (
    <div className={styles.wrapper}>
      <div className="my_container">
        <nav>
          <div className="navbar">
            <div className="logo">
              <img src="/logos/HosDocs__logo-with-text.png" alt="Logo" />
            </div>
            <ul>
              <li>
                <Link to="./">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <span className="nav-item">Home</span>
                </Link>
              </li>
              <li>
                <Link to="analytics">
                  <FontAwesomeIcon icon={faBarChart} className="icon" />
                  <span className="nav-item">All Documents</span>
                </Link>
              </li>
              <li>
                <Link to="my_docs">
                  <FontAwesomeIcon icon={faDochub} className="icon" />
                  <span className="nav-item">Add Documenents</span>
                </Link>
              </li>
              <li>
                <Link to="my_history">
                  <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
                  <span className="nav-item">Meet</span>
                </Link>
              </li>
              <li>
                <Link to="settings">
                  <FontAwesomeIcon icon={faCog} className="icon" />
                  <span className="nav-item">Setting</span>
                </Link>
              </li>
              <li>
                <Link to="help">
                  <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
                  <span className="nav-item">Help</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="logout">
                  <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                  <span className="nav-item">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="main">
          <div className="main-top">
            <p>Take care of what matters!</p>
          </div>
          <div className="main-body">
            <SearchApiService.Provider value={searches}>
              <VersionsApiService.Provider value={versions}>
                <h1>Hospital Documents</h1>

                <div className="search_bar">
                  <div className="searchInputBar">
                    <input
                      type="search"
                      placeholder="Search documents here..."
                      className="inputText"
                    />
                    <Link to="search">
                      <FontAwesomeIcon icon={faSearch} className="searchBtn" />
                    </Link>
                  </div>
                  <select name="category" id="">
                    <option>-- SELECT DOCUMENT CATEGORY --</option>
                    <option>Hospital Documents</option>
                    <option>Doctor's Documents</option>
                    <option>Patient Documents</option>
                  </select>
                  <select name="filter" id="filter" className="filter">
                    <option>-- FILTERS --</option>
                    <option>Health Surveys</option>
                    <option>Information Systems</option>
                    <option>----------------------</option>
                    <option>Operative Reportss</option>
                    <option>Progress Notes</option>
                    <option>----------------------</option>
                    <option>Consent Forms</option>
                    <option>Discharge Summary</option>
                    <option>Insurance Forms</option>
                    <option>Medical Reports</option>
                    <option>Medical Tests</option>
                    <option>medical Status Exams</option>
                    <option>----------------------</option>
                  </select>
                </div>
                <DocumentsApiService.Provider value={documents}>
                  <Outlet />
                </DocumentsApiService.Provider>
              </VersionsApiService.Provider>
            </SearchApiService.Provider>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
